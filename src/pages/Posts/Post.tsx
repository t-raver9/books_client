import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { getPost } from "../../api/posts";
import { Post } from "../Home/Home";

const FullPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    id &&
      getPost(id)
        .then((resp) => {
          console.log(resp);
          return resp;
        })
        .then((post) => setPost(post));
  }, []);

  return (
    (post && (
      <Box>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="subtitle1">{`${post.book.title}, by ${post.book.author}`}</Typography>
        <Typography variant="subtitle1">{`Reviewed by ${post.author}`}</Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {post.content}
        </Typography>
      </Box>
    )) || <div></div>
  );
};

export default FullPost;
