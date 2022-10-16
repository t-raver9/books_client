// TODO: the getPost API is called from <<url>>/posts, so we're not adding "posts" into the fetch argument.
// We probably should though. Figure out a better way to do this.
const getPost = (id: string) => fetch(`${id}`).then((post) => post.json());
const listPosts = () => fetch("posts/all").then((posts) => posts.json());

export { getPost, listPosts };
