import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import RepoDetails from "./Pages/Home/RepoDetails";
import "./App.css";
import Error404Page from "./Pages/Home/Error404Page";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-portfolio" element={<MyPortfolio />} />
            <Route path="/repodetails/:repoName" element={<RepoDetails />} />
            <Route path="/error404page" element={Error404Page} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
