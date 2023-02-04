import { Box, Typography } from '@mui/material';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { FrontMatter } from '../../types/blogData';
import { getFileContent } from '../../utils/md';

interface SlugPathType {
	params: {
		slug: string;
	};
}

interface PostsPropType {
	slug: string;
	content: string;
	blogData: FrontMatter;
}

const Posts = ({
	blogData: { title, date, about },
	content,
	slug,
}: PostsPropType) => {
	return (
		<Box>
			<Typography fontWeight='bold' variant='h4'>
				{title}
			</Typography>
			<Box>
				<Typography variant='caption'>{date}</Typography> &nbsp;
				<Typography variant='caption'>#{about}</Typography>
			</Box>
			<Typography marginTop={2} fontWeight='bold' variant='body2'>
				{content}
			</Typography>
		</Box>
	);
};

export default Posts;

export const getStaticPaths = async () => {
	const posts = fs.readdirSync(path.join('content'));

	const paths = posts.map((posts) => ({
		params: {
			slug: posts.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }: SlugPathType) => {
	const getMetaMarkdownInfo = getFileContent('content', slug + '.md');

	const { data: frontmatter, content } = matter(getMetaMarkdownInfo);

	return {
		props: {
			blogData: frontmatter,
			slug,
			content,
		},
	};
};
