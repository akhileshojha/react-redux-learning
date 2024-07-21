import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state">Props v. State</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/topics/:topicId" element={<Topic />} />
        <Route path="/topics" element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
};

export default Topics;
