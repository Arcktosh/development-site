import  { createRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import GetOrgThemeList from '@/snippets/getOrgThemeList';
import AddCookie from '@/snippets/addCookie';

const ThemeSwitch = () => {
    const { orgThemes, isLoading } = GetOrgThemeList();
	const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
	const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: 'bottom-start',
		});
		setDropdownPopoverShow(true);
    };
    
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
    };
    
    const switchToTheme = (id: number) => {
        AddCookie({ Name: 'theme', Value: id })
        closeDropdownPopover();
        window.location.reload()
    }

	return isLoading ? (
		<></>
	) : (
		<>
			<a
				className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
				href="#pablo"
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
				Themes
			</a>
			<div
				ref={popoverDropdownRef}
				className={
					(dropdownPopoverShow ? 'block ' : 'hidden ') +
					'bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-48'
				}
			>
				{orgThemes?.map((theme: any, i: number) => (
					<button
						id={theme.id}
						key={i}
						onClick={() => {
							switchToTheme(theme.id);
						}}
						className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					>
						{theme?.attributes?.name}
					</button>
				))}
			</div>
		</>
	);
};

export default ThemeSwitch;
