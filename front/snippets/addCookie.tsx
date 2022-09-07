import Cookies from 'js-cookie';
import { domain } from '@/context/constants';

const neededAttributes = {
	domain: domain,
	secure: true,
};
const newAttributes = {
	domain: domain,
	secure: true,
	expires: 7,
};

export interface CookieProps {
    Name: string,
    Value: string
}

const AddCookie = (props:CookieProps)=>{
	Cookies.remove(props.Name, neededAttributes);
	Cookies.set(props.Name, props.Value, newAttributes);
}

export default AddCookie;