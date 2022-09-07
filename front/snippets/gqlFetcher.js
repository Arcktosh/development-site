import { request } from 'graphql-request';

const fetcher = (query) => request(process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:1337/graphql', query);

export default fetcher