import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import starsIcon from "./img/icons8-star-64.png";
import eyeIcon from "./img/icons8-sleepy-eyes-64.png";
import forkIcon from "./img/icons8-git-64.png";
import branchesIcon from "./img/icons8-active-directory-64.png";


function RepoDetails() {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/Torn2code/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepoDetails(data))
      .catch((error) => console.error(error));
  }, [repoName]);

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repo-details-container">
    <div className="repo-mini-details">
    <h2>{repoDetails.name}</h2>
    <p>
          {repoDetails.description} {/* Display the repository description */}
        </p>
      <p>
        <img src={starsIcon} alt="Stars Icon" className="icons" />
        Stars: {repoDetails.stargazers_count}
      </p>
      <p>
        <img src={eyeIcon} alt="Eye Icon" className="icons" />
        Watch: {repoDetails.watchers}
      </p>
      <p>
        <img src={forkIcon} alt="Fork Icon" className="icons" />
        Forks: {repoDetails.forks}
      </p>
      <p>
        <img src={branchesIcon} alt="Branches Icon" className="icons" />
        Branches: {repoDetails.branch ? repoDetails.branch.length : 0}
      </p>
      <p>
       Main Language: {repoDetails.language === null ? "none" : repoDetails.language}
      </p>
    
      <p>
        <a href={`https://github.com/${repoDetails.full_name}`}>View on Github</a>
      </p>
    </div>
  </div>
  );
}

export default RepoDetails;
