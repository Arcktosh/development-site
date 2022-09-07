import { createRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from '@/components/Link';

type List = {
	url?: string;
	name?: string;
  
};

export interface DropdownProps {
	Title?: string;
	List?: List[];
}

const Dropdown = (props: DropdownProps) => {
	// dropdown props
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

	return (
		<>
			<a
				className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
				href="#pablo"
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
				{props?.Title || <FontAwesomeIcon icon={faCircleChevronDown} />}
			</a>
			{props?.List?.map((item, i) => (
				<li key={i}>
					<a href={item?.url} >{item.name}</a>
				</li>
			))}
			{props.List ? (
				<div
					ref={popoverDropdownRef}
					className={
						(dropdownPopoverShow ? 'block ' : 'hidden ') +
						'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
					}
				>
					{props.List.map((item, i) => (
						<li key={i}>
							<Link href={item?.url} as={item.name} />
						</li>
					))}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Dropdown;
