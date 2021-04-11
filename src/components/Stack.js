import React from "react"
import styled from "styled-components"

const Stack = ({ stack }) => {
  return (
    <Wrapper>
      <div className="header">
        {stack.icon}
        <h5>{stack.category}</h5>
      </div>
      <ul className="stack__lists">
        {stack.languages.map(language => {
          return (
            <li key={language.id}>
              {language.icon}
              <p>{language.language}</p>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  color: var(--light);
  box-shadow: var(--dark-shadow);
  padding: 1.5rem;

  .header {
    display: flex;
    align-items: center;
    font-size: var(--fz-heading-5);
    line-height: var(--lh-heading);
  }
  h5 {
    margin-left: 1rem;
  }
  .stack__lists {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
        }
    li {
      display: flex;
      align-items: center;
      p {
        font-size: var(--fz-body);
        margin-left: 1rem;
        line-height: var(--lh-paragraph);
      }
    }
  }
`

export default Stack
