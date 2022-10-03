const listPosts = () => fetch("posts/all").then((posts) => posts.json());

export { listPosts };
