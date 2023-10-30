import React from "react";
import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="./img/icons8-404-error-64.png" alt="Error 404" />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Error404Page;
