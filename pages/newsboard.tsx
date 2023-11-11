import React, { useState } from "react";
import { NewsBoardProps } from "../types/newsBoard";
import Head from "next/head";
import {
  Box,
  Fade,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkInProgress from "../components/WorkInProgress";
import { config } from "../config";

const NewsBoard = (props: NewsBoardProps) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const ipadScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>N | News Feed</title>
      </Head>

      <Fade in>
        <Box sx={{ mb: 4 }}>
          <Typography marginTop={4} variant="h4" fontWeight="bold">
            News Feed
          </Typography>
        </Box>
      </Fade>

      {props.post?.length > 0 ? (
        <Fade in>
          <Box>
            <TextField
              name="search"
              type="text"
              placeholder="Search"
              variant="outlined"
              value={searchValue}
              fullWidth={ipadScreen ? true : false}
              onChange={(e) => setSearchValue(() => e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Fade>
      ) : (
        <WorkInProgress />
      )}
    </>
  );
};

export default NewsBoard;

export async function getServerSideProps() {
  try {
    const apiUrl = config.apiUrl;
    let response = await fetch(`${apiUrl}api/linkPost`);
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (error) {
    console.log(error);
  }
}
