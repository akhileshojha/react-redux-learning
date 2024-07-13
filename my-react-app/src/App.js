import React, { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from "./logo.svg";
import userPic from "./aarika_ojha_profile.jpeg";
import "./App.css";
import Counter from "./Counter";
import Pagination from "./Pagination";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const NoMatch = () => <h2>Nothing to see here!</h2>;
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={userPic} className="App-user" alt="logo" />
        Learn React and Redux
        <h1>Aarika Ojha</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </header>
      <main>
        <Counter></Counter>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        ></Pagination>
      </main>
    </div>
  );
}

export default App;
