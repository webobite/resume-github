import React from "react";
import styled from "styled-components";

import parse from "html-react-parser";

const PRWrapper = styled.div`
  margin: 16px 0;
  a {
    text-decoration: none;
    color: var(--repoTitleColor);
  }
  a:hover {
    color: var(--repoTitleHoverColor);
  }
  .name {
    font-size: 20px;
    margin: 4px 0;
  }
  .stats {
    font-family: "Noticia Text", sans-serif;
  }
`;

function PRRepo({ repository, contributions }) {
  let commits = 0;
  contributions.nodes.forEach((node) => {
    commits += node.pullRequest.commits.totalCount;
  });
  return (
    <PRWrapper>
      <div className="name">
        <a href={repository.url} target="_blank" rel="noopener noreferrer">
          {repository.nameWithOwner}
        </a>
      </div>
      <ul className="description">
        {" "}
        {repository.description ? <li>{parse(repository.description)}</li> : null}
        <li className="stats">
          Made {commits} commit(s) in {contributions.totalCount} Pull Request(s).
        </li>
      </ul>
    </PRWrapper>
  );
}

export default PRRepo;
