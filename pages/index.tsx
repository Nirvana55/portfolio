import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Nirvana from '../public/nirvana.jpg';
import { Box, Fade, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Blog from '../components/Blog';
import {
	ReadMoreButtonStyle,
	SeeAllPostButtonStyle,
	WaveHandStyle,
} from '../styles/homeStyles';
import { getAllPosts } from '../utils/md';
import { BlogsData } from '../types/blogData';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface BlogPosts {
	posts: BlogsData[];
}

const Page = ({ posts }: BlogPosts) => {
	const theme = useTheme();
	const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Head>
				<title>N | Home</title>
			</Head>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				sx={{ mt: 6 }}>
				<Box sx={{ mt: 3, flexBasis: '500px' }}>
					<Fade in={true}>
						<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
							Hey, {mobileScreen && <br />} Wassup
							<WaveHandStyle>👋</WaveHandStyle>
						</Typography>
					</Fade>
					<Fade in={true}>
						<Typography
							sx={{
								mt: 3,
								lineHeight: 1.8,
							}}
							variant='body2'>
							Full stack web developer who has worked on sites for small and
							medium-sized enterprises. I can assist you in advertising your
							services and design up a whole website to boost your business.
							Profound in HTML,CSS, the MERN stack(React/Node/Mongodb) and
							wordpress.
						</Typography>
					</Fade>
					<Link href='/about'>
						<Fade in={true}>
							<ReadMoreButtonStyle
								sx={{ mt: 2, color: 'white', padding: 0 }}
								size='medium'>
								Read More About Me
							</ReadMoreButtonStyle>
						</Fade>
					</Link>
				</Box>
				<Fade in={true}>
					<Box
						sx={{
							mt: 5,
							borderRadius: '50%',
							boxShadow: '0px 0px 8px 1px #DC143C',
						}}>
						<Image
							height={140}
							width={140}
							className='image-style'
							src={Nirvana}
							alt='Nirvana'
						/>
					</Box>
				</Fade>
			</Box>
			<Box sx={{ mb: 4 }}>
				<Box sx={{ mt: 10 }}>
					<Fade in={true}>
						<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
							Recent Posts
						</Typography>
					</Fade>
					<Box sx={{ mt: 4 }}>
						<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
							{posts
								.sort(
									(a, b) =>
										new Date(b.frontmatter.date).valueOf() -
										new Date(a.frontmatter.date).valueOf()
								)
								.slice(0, 3)
								.map((blogs) => (
									<Grid item key={blogs.slug} xs={3.5} sm={4} md={4}>
										<Blog blogs={blogs} />
									</Grid>
								))}
						</Grid>
					</Box>

					<Box sx={{ float: 'right', mt: 3, mb: 3 }}>
						<Link href='/blog'>
							<Fade in={true}>
								<SeeAllPostButtonStyle>
									See All Posts <ArrowRightAltIcon sx={{ pl: 1 }} />
								</SeeAllPostButtonStyle>
							</Fade>
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Page;

export const getStaticProps: GetStaticProps<BlogPosts> = async () => {
	const posts = getAllPosts();

	return {
		props: {
			posts: posts,
		},
	};
};
