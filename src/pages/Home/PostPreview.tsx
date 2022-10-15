import { Post } from "./Home";

interface Props {
  post: Post;
}

const PostPreview = ({ post }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        border: "4px solid black",
      }}
    >
      <div>{post.title}</div>
      <div>{`Book: ${post.book.title}`}</div>
      <div>{`Author: ${post.book.author}`}</div>
      <div>{`Reviewed by: ${post.author}`}</div>
    </div>
  );
};

export default PostPreview;
