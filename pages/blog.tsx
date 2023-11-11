import { Box, Fade, Grid, TextField, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Blog from "../components/Blog";
import { BlogsData } from "../types/blogData";
import { getAllPosts } from "../utils/md";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from "@mui/material/InputAdornment";
import WorkInProgress from "../components/WorkInProgress";
import SearchIcon from "@mui/icons-material/Search";

interface BlogContainer {
  posts: BlogsData[];
}

const BlogContainer = ({ posts }: BlogContainer) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const ipadScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>N | Blogs</title>
      </Head>
      <Box sx={{ mb: 4 }}>
        <Fade in>
          <Typography marginTop={5} variant="h4" fontWeight="bold">
            Blogs
          </Typography>
        </Fade>

        <Fade in>
          <Box>
            <TextField
              sx={{ mt: 2, width: { md: "50%" } }}
              type="text"
              name="search"
              placeholder="Search Blogs"
              variant="outlined"
              fullWidth={ipadScreen ? true : false}
              value={searchValue}
              onChange={(e) => setSearchValue(() => e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ cursor: "pointer" }} position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ mt: 3 }}>
              {posts.filter((item) =>
                item.frontMatter.title.includes(searchValue)
              ).length > 0 ? (
                <Grid
                  container
                  justifyContent={mobileScreen ? "center" : ""}
                  spacing={2}
                  columns={{ xs: 2, sm: 8, md: 12 }}
                >
                  {posts
                    .sort(
                      (a, b) =>
                        new Date(b.frontMatter.date).valueOf() -
                        new Date(a.frontMatter.date).valueOf()
                    )
                    .filter((item) => item.frontMatter.isPublished)
                    .map((posts) => (
                      <Grid item xs={3.5} sm={4} md={4} key={posts.slug}>
                        <Blog blogs={posts} />
                      </Grid>
                    ))}
                </Grid>
              ) : (
                <WorkInProgress />
              )}
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default BlogContainer;

export const getStaticProps: GetStaticProps<BlogContainer> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};
