import Link from 'next/link'
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
	FormControlLabel,
} from '@mui/material'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import Copyright from '@/components/Copyright'

export default function SignUp() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
		})
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<QuestionMarkIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Forgot Password
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Reset Password
					</Button>
					<Grid container justifyContent="flex">
						<Grid item>
							<Link href="signin">Remember password? Sign in</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	)
}
