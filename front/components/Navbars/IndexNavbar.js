import { useState } from 'react';
import Link from 'next/link';
import GetOrgNavLinks from '@/snippets/getOrgNavLinks';
import GetOrgThemeNav from '@/snippets/getOrgThemeNavbar';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const { navbar } = GetOrgNavLinks();
  const { orgThemeNav } = GetOrgThemeNav();
  
  console.log(navbar);
	return (
		<>
			<nav
				className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ${
					navbar?.transparent ? '' : 'bg-green-400'
				} shadow`}
				style={{ backgroundColor: orgThemeNav?.bgColor }}
			>
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						{navbar?.home ? (
							<Link href={navbar.home?.url}>
								<a
									className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
									style={{ color: orgThemeNav?.linkColor }}
								>
									{navbar?.home?.name}
								</a>
							</Link>
						) : (
							<></>
						)}

						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' + (navbarOpen ? ' block' : ' hidden')
						}
						id="example-navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							{navbar?.links.map((link) => {
								<li className="flex items-center">
									<Link href={link.url}>
										<a
											className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
											style={{ color: orgThemeNav?.linkColor }}
											href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
											target="_blank"
										>
											{link.name}
										</a>
									</Link>
								</li>;
							})}
						</ul>
						<ThemeSwitch />
					</div>
				</div>
			</nav>
		</>
	);
}
