import React from "react"
import styled from "styled-components"
import { FaExternalLinkAlt } from "react-icons/fa"

import Tags from "../Tags"
const Cards = ({ apps }) => {
  return (
    <Wrapper className="mt-4">
      {apps.map((app, index) => {
        return (
          <li key={index} className="px-3 py-2 shadow-md">
            <img
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${app.url}`}
              alt="sample"
            />
            <div className="aside">
              <h3>
                {app.title}{" "}
                <a href={app.url} className="ml-3">
                  <FaExternalLinkAlt />
                </a>
              </h3>
              <p>{app.description}</p>
              <Tags tags={app.tags} styleClass="mt-3" />
            </div>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 35px;
  > li {
    background-color: #fff;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    gap: 20px;
    > img {
      width: 100%;
    }
  }
  .aside {
    > h3 {
      font-size: var(--fz-body);
      display: flex;
      align-items: center;
      > a {
        color: var(--primary-3);
        font-size: var(--fz-paragraph);
        &:hover {
          color: var(--primary-5);
        }
      }
    }
    > p {
      font-size: var(--fz-paragraph);
    }
  }
`

export default Cards
