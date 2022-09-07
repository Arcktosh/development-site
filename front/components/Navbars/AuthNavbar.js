import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';
import Dropdown from '@/components/Dropdowns';
import GetOrgNavLinks from '@/snippets/getOrgNavLinks';
import GetOrgThemeNav from '@/snippets/getOrgThemeNavbar';


const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const { navbar } = GetOrgNavLinks();

	const list = navbar?.links?.map((item) => {
		let properties = { "url": item.url, "name": item.name }
		return properties;
	})

	return (
		<>
			<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href="/">
							<a
								className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
								href="#pablo"
							>
								{navbar?.home?.name}
							</a>
						</Link>

						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="text-white fas fa-bars"></i>
						</button>
					</div>

					<div
						className={
							'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
							(navbarOpen ? ' block rounded shadow-lg' : ' hidden')
						}
						id="example-navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="flex items-center"></li>
							<Dropdown Title="Here" List={list} />
						</ul>
						<ThemeSwitch />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
