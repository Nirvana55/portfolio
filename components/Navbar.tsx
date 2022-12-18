import React, { useState } from 'react';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

const NavBar = () => {
	const drawerWidth = 240;
	const [mobileOpen, setMobileOpen] = useState(false);
	const navList = ['Home', 'About', 'Contact'];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box>
			<Typography>Nikhil</Typography>
			<Divider />
			<List>
				{navList.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
						{item}
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position='static'
				component='nav'
				color='transparent'
				sx={{ mb: '1rem' }}>
				<Toolbar>
					<IconButton
						onClick={handleDrawerToggle}
						edge='start'
						color='inherit'
						aria-label='open-drawer'
						sx={{ display: { sm: 'none' }, mr: 2 }}>
						N
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						Nikhil
					</Typography>
					<Box>
						{navList.map((item) => (
							<Button key={item} sx={{ color: '#fff' }}>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					open={mobileOpen}
					onClose={handleDrawerToggle}
					variant='temporary'
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawerPaper': {
							boxSizing: 'border-box',
							width: `${drawerWidth}`,
						},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavBar;
