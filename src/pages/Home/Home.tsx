import React, { useEffect, useState } from "react";

import { listPosts } from "../../api/posts";

import PostPreview from "./PostPreview";

interface Book {
  id: number;
  title: string;
  author: string;
}

export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  book: Book;
}

const PostContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      height: "1rem",
    }}
  >
    {children}
  </div>
);

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    listPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <PostContainer>
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} />
      ))}
    </PostContainer>
  );
};

export default Home;
