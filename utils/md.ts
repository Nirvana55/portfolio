import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllPosts = () => {
	const files = fs.readdirSync(path.join('content'));
};
