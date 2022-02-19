import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChairOutlined from '@mui/icons-material/ChairOutlined';
import { Link } from 'react-router-dom/';

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1, mb:15 }}>
			<AppBar position="fixed" sx={{backgroundColor:'orange', mb:5 }}>
				<Toolbar>
					<Link style={{textDecoration: 'none'}} to="/">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 1 }}
							>
							<ChairOutlined />
						</IconButton>
					</Link>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Place Marquette</Typography>
					<Link style={{textDecoration: 'none'}} to="/signup"><Button color="inherit">Sign up</Button></Link>
					<Typography>l</Typography>
					<Link style={{textDecoration: 'none'}} to="/login"><Button color="inherit">Log in</Button></Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};