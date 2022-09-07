import GQLRequest from './GraphQLRequest';
import { orgId } from 'context/constants';

function GetOrgThemeList() {
	const { data, error } = GQLRequest(
		`{
			themes(filters: { organization: { id: { eq: ${orgId} } } }) {
				data {
					id
					attributes {
						name
					}
				}
			}
		}
    `
	);
	return {
		orgThemes: data?.themes.data,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgThemeList;
