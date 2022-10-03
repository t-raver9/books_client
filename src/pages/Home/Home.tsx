import { useState } from "react";

import { listPosts } from "../../api/posts";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  book: Book;
}

const Home = () => {
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postId, setPostId] = useState("1");
  const [posts, setPosts] = useState<Post[]>([]);

  const createPost = (e: React.MouseEvent) => {
    e.preventDefault();

    const dataForCreate = {
      bookAuthor: bookAuthor,
      bookTitle: bookTitle,
      postAuthor: postAuthor,
      postContent: postContent,
      postTitle: postTitle,
    };

    fetch("posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForCreate),
    });
  };

  const getAllPosts = (e: React.MouseEvent) => {
    e.preventDefault();

    listPosts().then((data) => console.log(data));
  };

  const getPost = (e: React.MouseEvent) => {
    e.preventDefault();

    fetch(`/posts/${postId}`)
      .then((response) => response.json())
      .then((posts: Post[]) => setPosts(posts));
  };

  return (
    <div>
      <form>
        <label>
          Post ID:{" "}
          <input
            type="text"
            name="ID"
            onChange={(e) => setPostId(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={(e) => getPost(e)} />
      </form>
      <form>
        <input
          type="submit"
          value="Get All Posts"
          onClick={(e) => getAllPosts(e)}
        ></input>
      </form>
      <p>Create new post</p>
      <form>
        <label>
          Book Author:{" "}
          <input
            type="text"
            name="Book Author"
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </label>
        <label>
          Book Title:{" "}
          <input
            type="text"
            name="Book Title"
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </label>
        <label>
          Post Author:{" "}
          <input
            type="text"
            name="Post Author"
            onChange={(e) => setPostAuthor(e.target.value)}
          />
        </label>
        <label>
          Post Title:{" "}
          <input
            type="text"
            name="Post Title"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </label>
        <label>
          Post Content:{" "}
          <textarea
            name="Post Content"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={(e) => createPost(e)} />
      </form>
    </div>
  );
};

export default Home;
