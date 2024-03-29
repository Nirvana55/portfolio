"use client";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { CardContainer, ImageContainerStyle } from "./styles";
import { BlogsData } from "../../types/blogData";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPosts {
  blogs: BlogsData;
}

const Blog = ({ blogs }: BlogPosts) => {
  const { slug, frontMatter } = blogs;
  return (
    <Link href={`blog/${slug}`} legacyBehavior>
      <Fade in>
        <motion.div
          whileHover={{
            y: -10,
            transition: { type: "spring" },
          }}
          className='cursor-pointer shadow-custom h-full rounded'
        >
          <ImageContainerStyle>
            <Image
              alt='Image Alt'
              src={frontMatter.image}
              fill
              objectFit='cover'
              loading='lazy'
              className='image-card'
            />
          </ImageContainerStyle>
          <CardContent sx={{ height: "120px" }}>
            <Typography
              variant='body1'
              className='line-clamp-2'
              fontWeight='bold'
            >
              {frontMatter.title.toUpperCase()}
            </Typography>
            <Typography className='line-clamp-2 mt-2' variant='caption'>
              {frontMatter.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ float: "right", marginBottom: 0.3 }}>
            <Button sx={{ color: "white" }} size='small'>
              Read More
            </Button>
          </CardActions>
        </motion.div>
      </Fade>
    </Link>
  );
};

export default Blog;
