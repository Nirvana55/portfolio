import { Box } from '@mui/material';
import React, { FC } from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return <Box sx={{ width: '55%', m: '0 auto' }}>{children}</Box>;
};

export default Layout;
