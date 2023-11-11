import React from "react";
import { NewsBoardProps } from "../types/newsBoard";

const NewsBoard = (props: NewsBoardProps) => {
  return <div>NewsBoard</div>;
};

export default NewsBoard;

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/linkPost");
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (error) {
    console.log(error);
  }
}
