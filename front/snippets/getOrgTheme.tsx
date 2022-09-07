import GQLRequest from './GraphQLRequest';
import { theme } from 'context/constants';

function GetOrgTheme() {
	const { data, error } = GQLRequest(
		`{
	theme(id:${theme}){
		data{
      attributes{
        name
        footer{
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
		orgTheme: data?.theme.data.attributes,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgTheme;
