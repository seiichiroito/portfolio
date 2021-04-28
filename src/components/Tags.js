import React from "react"
import styled from "styled-components"

const Tags = ({ tags, styleClass }) => {
  return (
    <Wrapper className={styleClass}>
      {tags.map((tag, index) => {
        return (
          <li key={index} className="px-2">
            {tag}
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  li {
    border: 1px solid var(--primary-5);
    border-radius: var(--radius);
    color: var(--primary-5);
    font-size: 12px;
  }
  li + li {
    margin-left: 1rem;
  }
`
export default Tags
