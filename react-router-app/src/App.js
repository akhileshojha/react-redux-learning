import React from "react";
import { Routes, Route, Link, Outlet, useParams, useRoutes } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <nav>
        <ul>
          <li>
            <Link to="/blog/posts">Posts</Link>
          </li>
          <li>
            <Link to="/blog/authors">Authors</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        <li>
          <Link to="/blog/posts/1">Post 1</Link>
        </li>
        <li>
          <Link to="/blog/posts/2">Post 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function PostDetails() {
  const { postId } = useParams();
  return <h3>Post Details: {postId}</h3>;
}

function Authors() {
  return (
    <div>
      <h2>Authors</h2>
      <ul>
        <li>
          <Link to="/blog/authors/1">Author 1</Link>
        </li>
        <li>
          <Link to="/blog/authors/2">Author 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function AuthorDetails() {
  const { authorId } = useParams();
  return <h3>Author Details: {authorId}</h3>;
}

function App() {
  // const element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/about',
  //     element: <About />,
  //   },
  // ]);
  return (
    <Routes>
      <Route path="/" element={<Blog />}>
        <Route path="posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetails />} />
        </Route>
        <Route path="authors" element={<Authors />}>
          <Route path=":authorId" element={<AuthorDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
