import useSWR from 'swr';
import fetcher from './gqlFetcher';

function GQLRequest(query) {
	const { data, error } = useSWR(`${query}`, fetcher);
	return {
		data: data,
		isLoading: !error && !data,
		error: error,
	};
}
export default GQLRequest;
