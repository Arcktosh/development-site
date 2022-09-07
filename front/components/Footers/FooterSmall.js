import GetOrgTheme from 'snippets/getOrgTheme';
import Copyright from '../Copyright';

const FooterSmall = (props) => {
	const { orgTheme } = GetOrgTheme();
	return (
		<footer
			className={(props.absolute ? 'absolute w-full bottom-0' : 'relative') + ' pb-6'}
			style={{ backgroundColor: orgTheme.footer.bgColor }}
		>
			<div className="container mx-auto px-4">
				<hr className="mb-6 border-b-1 border-blueGray-600" />
				<Copyright />
			</div>
		</footer>
	);
};

export default FooterSmall;
