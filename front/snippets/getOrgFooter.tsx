import GQLRequest from './GraphQLRequest';
import { orgId } from 'context/constants';

function GetOrgFooter() {
	const { data, error } = GQLRequest(
		`{
	organization(id:${orgId}){
		data{
      attributes{
        footer{
          showYear
          name
        }
      }
    }
	}}
    `
	);
	return {
		orgFooter: data?.organization.data.attributes.footer,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgFooter;
