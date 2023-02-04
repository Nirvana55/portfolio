export interface BlogsData {
	slug: string;
	frontmatter: FrontMatter;
}

export interface FrontMatter {
	[key: string]: string;
}
