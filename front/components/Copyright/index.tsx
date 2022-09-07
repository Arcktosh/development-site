import GetOrgFooter from 'snippets/getOrgFooter';
import GetOrgTheme from 'snippets/getOrgTheme';

const Copyright = () => {
	const { orgFooter, isLoading } = GetOrgFooter();
	const { orgTheme } = GetOrgTheme();

	return isLoading ? (
		<div>...</div>
	) : (
		<div className="flex flex-wrap items-center md:justify-between justify-center">
			<div className="w-full md:w-4/12 px-4 mx-auto text-center">
				<div className="text-sm font-semibold py-1" style={{ color: orgTheme?.footer.txtColor }}>
					Copyright © {orgFooter?.showYear ? new Date().getFullYear() : ''} {orgFooter.name}
				</div>
			</div>
		</div>
	);
};
export default Copyright;