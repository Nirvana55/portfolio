export interface BlogsData {
	slug: string;
	frontMatter: FrontMatter;
}

export interface FrontMatter {
	[key: string]: string;
}
