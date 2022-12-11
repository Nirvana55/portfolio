import React from 'react';
import Link from 'next/link';

const NavBar = () => {
	return (
		<ul>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/about'>About</Link>
			</li>
			<li></li>
		</ul>
	);
};

export default NavBar;
