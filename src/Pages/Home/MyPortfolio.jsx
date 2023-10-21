import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function MyPortfolio() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");
  const githubUsername = "Torn2code";
  const { repoName } = useParams();


  const fetchRepos = () => {
    fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=6&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setShowViewMore("End of Repos");
        } else {
          setUser([...user, ...data]);
          setShowViewMore("View More");
        }
      });
  }

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <p className="sub--title">Github Projects</p>
            <h2 className="section--heading">My recent Projects</h2>
          </div>
        </div>
      </section>
      <section className="repo-container">
        {user.map((userElement) => (
          <div className="repo-card" key={userElement.id}>
            <Link to={`/repodetails/${userElement.name}`}>
              <h2 className="repo-name">{userElement.name}</h2>
            </Link>
            <p className="language">Language: {userElement.language === null ? "none" : userElement.language}</p>
            <p className="date">Start date & time: {userElement.created_at}</p>
            <p className="visibility">Visibility: {userElement.visibility}</p>
          </div>
        ))}
      </section>
      <p className="view-more" onClick={viewMore}>{showViewMore}</p>
    </>
  );
}

export default MyPortfolio;
