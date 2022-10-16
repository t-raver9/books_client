import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { Post } from "./Home";

interface Props {
  post: Post;
}

const PostPreview = ({ post }: Props) => (
  <Box sx={{ minWidth: 275 }}>
    <Link to={`/posts/${post.id}`}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {post.book.author}
            </Typography>
            <Typography variant="h5" component="div">
              {post.book.title}
            </Typography>
            <Typography variant="body2">
              Reviewed by
              <br />
              Harry Travers
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  </Box>
);

export default PostPreview;
