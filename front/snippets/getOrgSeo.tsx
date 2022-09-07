import GQLRequest from './GraphQLRequest';
import { orgId, lang } from 'context/constants';

function GetOrgSeo() {
	const { data, error } = GQLRequest(
		`{
        seos(filters: { locale: { eq: "${lang}" }, organization: { id: { eq: ${orgId} } } }) {
          data {
            attributes {
              organization {
                data {
                  attributes {
                    name
                  }
                }
              }
              twitter {
                title
                description
                url
                author
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              openGraph {
                title
                description
                url
                author
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }                
              }
            }
          }
        }
      }
    `
	);
  
	return {
		orgSeo: data?.seos.data[0].attributes,
		isLoading: !error && !data,
		error: error,
	};
}

export default GetOrgSeo;
