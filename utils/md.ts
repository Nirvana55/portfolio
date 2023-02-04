import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogsData } from '../types/blogData';

export const getAllPosts = (): BlogsData[] => {
	// getting content of the directories
	const files = fs.readdirSync(path.join('content'));

	const posts = files.map((posts) => {
		// creating a slug
		const slug = posts.replace('.md', '');
		// getting front matter
		// join file
		const getMetaMarkdownInfo = fs.readFileSync(path.join('content', posts), {
			encoding: 'utf8',
		});

		// naming object as frontmatter
		// and parsing with gray matter
		const { data: frontmatter } = matter(getMetaMarkdownInfo);

		return {
			slug,
			frontmatter,
		};
	});

	return posts;
};
