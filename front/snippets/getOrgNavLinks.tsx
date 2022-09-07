import GQLRequest from './GraphQLRequest';
import { lang,orgId } from 'context/constants';

function GetOrgNavLinks() {
	const { data, error } = GQLRequest(
		`{
			navbars(filters: { organization: { id: { eq: ${orgId} } }, locale: { eq: "${lang}" } }) {
				data { attributes {
					transparent
					home {
						name
						url
						logo { data { attributes { url } } }
					}
					links {
						url
						name
						iconOnly
						icon { data { attributes { url } } }
						svgIcon
					}
				}}
			}
		}
    `
	);
	return {
		navbar: data?.navbars.data[0].attributes,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgNavLinks;
