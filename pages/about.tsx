import { Box, Chip, Fade, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Nirvana from "../public/nirvana.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";

const About = () => {
  const theme = useTheme();
  const ipadScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>N | About</title>
      </Head>
      <Box>
        <Fade in>
          <Typography marginTop={5} variant='h4' fontWeight='bold'>
            About Me
          </Typography>
        </Fade>

        <Box
          display='flex'
          flexDirection={ipadScreen ? "column" : "row"}
          sx={{ pt: 5 }}
        >
          <Box>
            <Fade in>
              <Box
                sx={{
                  border: "2px solid #DC143C",
                  padding: "0.8rem",
                  width: "200px",
                  borderRadius: "5px",
                }}
              >
                <Image src={Nirvana} height={200} width={200} alt='Nirvana' />
              </Box>
            </Fade>

            <Fade in>
              <Typography marginTop='1rem' variant='h6'>
                Nikhil Lama
              </Typography>
            </Fade>
            <Fade in>
              <Typography marginTop='1rem' variant='caption'>
                WEB DEVELOPER / NETWORK SECURITY
              </Typography>
            </Fade>
          </Box>

          <Fade in>
            <Box marginLeft={ipadScreen ? 0 : 4}>
              <Typography variant='body1' sx={{ lineHeight: "30px" }}>
                Full stack web developer who has worked on sites for small and
                medium-sized enterprises. I can assist you in advertising your
                services and design up a whole website to boost your business.
                Profound in HTML,CSS, the MERN/PERN stack and CMS.
              </Typography>
              <Typography variant='h6' fontWeight='bold' marginTop={2}>
                Skills:
              </Typography>
              <Stack
                marginTop={1}
                spacing={1}
                direction={mobileScreen ? "column" : "row"}
              >
                <Chip sx={{ cursor: "pointer" }} label='React' />
                <Chip sx={{ cursor: "pointer" }} label='Node' />
                <Chip sx={{ cursor: "pointer" }} label='MongoDB' />
                <Chip sx={{ cursor: "pointer" }} label='Typescript' />
                <Chip sx={{ cursor: "pointer" }} label='<HTML/>' />
                <Chip sx={{ cursor: "pointer" }} label='CSS' />
                <Chip sx={{ cursor: "pointer" }} label='Next Js' />
                <Chip sx={{ cursor: "pointer" }} label='Postgres' />
                <Chip sx={{ cursor: "pointer" }} label='Python' />
              </Stack>
              <Stack
                marginTop={1}
                spacing={1}
                direction={mobileScreen ? "column" : "row"}
              >
                <Chip sx={{ cursor: "pointer" }} label='SQL' />
                <Chip sx={{ cursor: "pointer" }} label='Prisma' />
                <Chip sx={{ cursor: "pointer" }} label='AWS' />
                <Chip sx={{ cursor: "pointer" }} label='Mongoose' />
                <Chip sx={{ cursor: "pointer" }} label='Docker' />
                <Chip sx={{ cursor: "pointer" }} label='GRPC' />
                <Chip sx={{ cursor: "pointer" }} label='Microservices' />
                <Chip sx={{ cursor: "pointer" }} label='Sqlite3' />
                <Chip sx={{ cursor: "pointer" }} label='CMS' />
              </Stack>
              <Stack
                marginTop={1}
                spacing={1}
                direction={mobileScreen ? "column" : "row"}
              >
                <Chip sx={{ cursor: "pointer" }} label='Linux' />
                <Chip sx={{ cursor: "pointer" }} label='Supabase' />
                <Chip sx={{ cursor: "pointer" }} label='Analytics' />
                <Chip sx={{ cursor: "pointer" }} label='Sass' />
                <Chip sx={{ cursor: "pointer" }} label='Burpsuite' />
                <Chip sx={{ cursor: "pointer" }} label='Nmap' />
              </Stack>
            </Box>
          </Fade>
        </Box>
      </Box>
    </>
  );
};

export default About;
