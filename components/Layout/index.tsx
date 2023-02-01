import { Box } from '@mui/material';
import React, { FC } from 'react';
import { LayoutContainerStyle } from './styles';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return <LayoutContainerStyle>{children}</LayoutContainerStyle>;
};

export default Layout;
