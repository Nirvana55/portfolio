import { Box, CircularProgress, Fade, Typography } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import { FrontMatter } from "../../types/blogData";
import { getFileContent } from "../../utils/md";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";

const Giscus = dynamic(() => import("@giscus/react"), {
  loading: () => <CircularProgress />,
});

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
  blogData: { title, date, about, image },
  content,
  slug,
}: PostsPropType) => {
  const dateConvert = new Date(date);

  return (
    <>
      <Head>
        <title>N | {slug}</title>
      </Head>
      <Fade in>
        <Box py={8}>
          <Typography className='uppercase' fontWeight='bold' variant='h4'>
            {title}
          </Typography>
          <Box mb={2} pt={2}>
            <Typography variant='caption'>
              {dateConvert.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            &nbsp;
            <Typography variant='caption'>#{about}</Typography>
          </Box>
          {!image ? (
            <CircularProgress />
          ) : (
            <Image
              src={image}
              alt='photo'
              loading='lazy'
              width={1000}
              height={600}
            />
          )}
          <ReactMarkdown className='whitespace-pre-wrap	text-justify leading-7 tracking-normal py-10'>
            {content}
          </ReactMarkdown>

          <Giscus
            id='comments'
            repo='nirvana55/portfolio'
            repoId='R_kgDOIo1Npw'
            category='General'
            categoryId='DIC_kwDOIo1Np84CdtyX'
            mapping='url'
            term='Welcome to my blog'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='bottom'
            theme='dark'
            lang='en'
            loading='lazy'
          />
        </Box>
      </Fade>
    </>
  );
};

export default Posts;

export const getStaticPaths = async () => {
  const posts = fs.readdirSync(path.join("content"));

  const paths = posts.map((posts) => ({
    params: {
      slug: posts.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: SlugPathType) => {
  const getMetaMarkdownInfo = getFileContent("content", slug + ".md");

  const { data: frontmatter, content } = matter(getMetaMarkdownInfo);

  return {
    props: {
      blogData: frontmatter,
      slug,
      content,
    },
  };
};
