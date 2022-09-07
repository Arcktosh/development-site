import GQLRequest from './GraphQLRequest';
import { theme } from 'context/constants';

function GetOrgThemeNavbar() {
	const { data, error } = GQLRequest(
		`{
	theme(id:${theme}){
		data{
      attributes{
        navbar{
          bgColor
          txtColor
		  linkColor
        }
      }
    }
	}}
    `
	);
	return {
		orgThemeNav: data?.theme.data.attributes.navbar,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgThemeNavbar;
