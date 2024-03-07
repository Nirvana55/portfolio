import {
  Box,
  Button,
  CardActions,
  CardContent,
  Fade,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import WorkInProgress from "../components/WorkInProgress";
import Link from "next/link";
import { CardContainer, ImageContainerStyle } from "../components/Blog/styles";
import Image from "next/image";

const Projects = () => {
  const data = [
    {
      projectTitle: "Rubixx cube",
      projectDescription: "Landing page for agency",
      status: "completed",
      image: "/rubixx.png",
      link: "https://www.rubixxcube.com/",
    },
    {
      projectTitle: "Negja",
      projectDescription: "Landing page for a jewelry client.",
      status: "inProgress",
      image: "/negja.png",
      link: "https://jewelry-association.vercel.app/",
    },
    {
      projectTitle: "Find A photographer",
      projectDescription: "Landing page for a client demo.",
      status: "completed",
      image: "/photography.png",
      link: "https://photography-app-mocha.vercel.app/",
    },
  ];

  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const ipadScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>N | Projects</title>
      </Head>

      <Fade in>
        <Box>
          <Typography marginTop={4} mb={4} variant='h4' fontWeight='bold'>
            Projects
          </Typography>

          {data.length > 0 ? (
            <Box>
              {/* <TextField
                name='search'
                type='text'
                placeholder='Search'
                variant='outlined'
                value={searchValue}
                fullWidth={ipadScreen ? true : false}
                onChange={(e) => setSearchValue(() => e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end' sx={{ cursor: "pointer" }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <Grid
                py={4}
                container
                justifyContent={mobileScreen ? "center" : ""}
                spacing={3}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                {data.map((item) => (
                  <Grid item xs={3.5} sm={4} md={4} key={item.link}>
                    <Link href={item.link} legacyBehavior>
                      <a>
                        <Fade in>
                          <CardContainer
                            className='hover:-translate-y-6 transition hover:duration-500 ease-in-out'
                            sx={{ cursor: "pointer" }}
                          >
                            <ImageContainerStyle>
                              <Image
                                alt='Image Alt'
                                src={item.image}
                                fill
                                loading='lazy'
                                className='image-card'
                              />
                            </ImageContainerStyle>
                            <CardContent sx={{ height: "120px" }}>
                              <Typography
                                variant='body1'
                                className='text-lg'
                                fontWeight='bold'
                              >
                                {item.projectTitle}
                              </Typography>
                              <Typography variant='caption'>
                                {item.projectDescription}
                              </Typography>
                            </CardContent>
                            <CardActions
                              sx={{ float: "right", marginBottom: 0.3 }}
                            >
                              <Button sx={{ color: "white" }} size='small'>
                                Read More
                              </Button>
                            </CardActions>
                          </CardContainer>
                        </Fade>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <WorkInProgress />
          )}
        </Box>
      </Fade>
    </>
  );
};

export default Projects;
