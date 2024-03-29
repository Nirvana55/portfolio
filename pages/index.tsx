import Head from "next/head";
import React from "react";
import Image from "next/image";
import Nirvana from "../public/nirvana.jpg";
import { Box, Fade, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Blog from "../components/Blog";
import {
  ReadMoreButtonStyle,
  SeeAllPostButtonStyle,
  WaveHandStyle,
} from "../styles/homeStyles";
import { getAllPosts } from "../utils/md";
import { BlogsData } from "../types/blogData";
import Link from "next/link";
import { GetStaticProps } from "next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface BlogPosts {
  posts: BlogsData[];
}

const Page = ({ posts }: BlogPosts) => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const ipadScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>N | Home</title>
      </Head>
      <Fade in>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          sx={{ mt: 6 }}
        >
          <Fade in>
            <Box sx={{ mt: 3, flexBasis: "500px" }}>
              <Typography sx={{ fontSize: 35 }} fontWeight='bold'>
                Hey, {ipadScreen && <br />} Wassup
                <WaveHandStyle>👋</WaveHandStyle>
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  lineHeight: 1.8,
                }}
                variant='body2'
              >
                Full stack web developer who has worked on sites for small and
                medium-sized enterprises. I can assist you in advertising your
                services and design up a whole website to boost your business.
                Profound in Web Development.
              </Typography>
              <Link href='/about'>
                <ReadMoreButtonStyle
                  sx={{ mt: 2, color: "white", padding: 0 }}
                  size='medium'
                >
                  Read More About Me
                </ReadMoreButtonStyle>
              </Link>
            </Box>
          </Fade>

          {!ipadScreen && (
            <Fade in>
              <Box
                sx={{
                  mt: 5,
                  borderRadius: "50%",
                  boxShadow: "0px 0px 8px 1px #DC143C",
                }}
              >
                <Image
                  height={140}
                  width={140}
                  className='image-style'
                  loading='lazy'
                  src={Nirvana}
                  alt='Nirvana'
                />
              </Box>
            </Fade>
          )}
        </Box>
      </Fade>

      <Fade in>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ mt: 10 }}>
            <Fade in>
              <Typography sx={{ fontSize: 35 }} fontWeight='bold'>
                Recent Posts
              </Typography>
            </Fade>

            <Fade in>
              <Box sx={{ mt: 4, flexGrow: 1 }}>
                {posts.filter((item) => item.frontMatter.isPublished).length >
                0 ? (
                  <Grid
                    container
                    justifyContent={mobileScreen ? "center" : ""}
                    spacing={3}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {posts
                      .sort(
                        (a, b) =>
                          new Date(b.frontMatter.date).valueOf() -
                          new Date(a.frontMatter.date).valueOf()
                      )
                      .slice(0, 3)
                      .filter((item) => item.frontMatter.isPublished)
                      .map((blogs) => (
                        <Grid item key={blogs.slug} xs={3.8} sm={4} md={4}>
                          <Blog blogs={blogs} />
                        </Grid>
                      ))}
                  </Grid>
                ) : (
                  <Box
                    sx={{ mt: 8, height: "110px" }}
                    textAlign='center'
                    alignSelf='center'
                    justifySelf='center'
                  >
                    <Typography variant='body2'>
                      Sorry, Work In Progress
                    </Typography>
                  </Box>
                )}
              </Box>
            </Fade>

            <Fade in>
              <Box sx={{ float: "right", mt: 3, mb: 3 }}>
                <Link href='/blog'>
                  <SeeAllPostButtonStyle>
                    See All Posts <ArrowRightAltIcon sx={{ pl: 1 }} />
                  </SeeAllPostButtonStyle>
                </Link>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Fade>
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
