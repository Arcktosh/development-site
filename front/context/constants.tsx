import Cookies from 'js-cookie';

export const gtag = process.env.NEXT_PUBLIC_GTAG_ID;
export const domain = process.env.NEXT_PUBLIC_DOMAIN;
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const gqlUrl = process.env.NEXT_PUBLIC_GQL_URL;
export const mainUrl = process.env.NEXT_PUBLIC_MAIN_URL;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const baseName = process.env.NEXT_PUBLIC_BASE_NAME;
export const env = process.env.ENV_MODE;

export const userId = Cookies.get('userid');
export const orgId = Cookies.get('orgID')||1;
export const theme = Cookies.get('theme') || 1;
export const lang = Cookies.get('lang') || "en";