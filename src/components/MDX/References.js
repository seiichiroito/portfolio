import React from "react"
import styled from "styled-components"
import { AiOutlineLink } from "react-icons/ai"

const references = [
  {
    title: "Spacing - Bootstrap",
    url: "https://getbootstrap.com/docs/4.0/utilities/spacing/",
  },
  {
    title: "A Complete Guide to Grid | CSS-Tricks",
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
  },
  {
    title: "Sass: Syntactically Awesome Style Sheets",
    url: "https://sass-lang.com/",
  },
  {
    title: "GitHub - airbnb/css",
    url: "https://github.com/airbnb/css",
  },
]
const References = () => {
  return (
    <Wrapper className="mt-8">
      {references.map((ref, index) => {
        return (
          <li key={index} className="px-2 py-3 md:py-1 shadow-md">
            <a href={ref.url}>
              <img
                src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${ref.url}`}
                alt={ref.title}
              />
              <p className="px-3">{ref.title}</p>
              <AiOutlineLink />
            </a>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  > li {
    background-color: #fff;
    display: flex;
    transition: var(--transition);
    &:hover {
      transform: scale(1.02);
    }
  }
  a {
    flex: 1;
    display: flex;
    align-items: center;
  }
  p {
    flex: 1;
    font-size: 12px;
  }
`
export default References
