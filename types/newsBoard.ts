export type NewsBoardProps = {
  post: Post[];
};

type Post = {
  _id: string;
  title: string;
  image: string;
  url: string;
};
