import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => {
	// const drawerWidth = 240;
	// const [mobileOpen, setMobileOpen] = useState(false);
	const navList = [
		{ id: 1, name: 'Home', link: '/' },
		{ id: 2, name: 'About', link: '/about' },
		{ id: 3, name: 'Blog', link: '/blog' },
	];

	// const handleDrawerToggle = () => {
	// 	setMobileOpen(!mobileOpen);
	// };

	// const drawer = (
	// 	<Box>
	// 		<Typography>Nikhil</Typography>
	// 		<Divider />
	// 		<List>
	// 			{navList.map((item) => (
	// 				<ListItem key={item.id} disablePadding>
	// 					<ListItemButton sx={{ textAlign: 'center' }}>
	// 						<ListItemText primary={item.name} />
	// 					</ListItemButton>
	// 					{item.name}
	// 				</ListItem>
	// 			))}
	// 		</List>
	// 	</Box>
	// );

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position='static'
				component='nav'
				color='transparent'
				sx={{ mb: '1rem' }}>
				<Toolbar>
					{/* <IconButton
						onClick={handleDrawerToggle}
						edge='start'
						color='inherit'
						aria-label='open-drawer'
						sx={{ display: { sm: 'none' }, mr: 2 }}>
						<MenuIcon />
					</IconButton> */}
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
						}}>
						Nikhil
					</Typography>
					<Box display='flex' alignItems='center'>
						{navList.map((item) => (
							<Box component='a' key={item.id} href={item.link}>
								<Button sx={{ color: '#fff' }}>{item.name}</Button>
							</Box>
						))}
						<Box
							component='a'
							href='https://github.com/Nirvana55'
							sx={{ cursor: 'pointer', ml: '0.875rem' }}>
							<GitHubIcon sx={{ color: 'white' }} />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			{/* <Box component='nav'>
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
			</Box> */}
		</Box>
	);
};

export default NavBar;
