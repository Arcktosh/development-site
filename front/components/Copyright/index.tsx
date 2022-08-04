import Link from 'next/link'
import { Typography } from '@mui/material'

const Copyright = (props: any) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link href="/">Create Next App</Link> {new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}
export default Copyright
