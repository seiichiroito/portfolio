import React from "react"
import styled from "styled-components"

const Stack = ({ stack }) => {
  return (
    <Wrapper className="p-4">
      <div className="header">
        {stack.icon}
        <h5 className="ml-4">{stack.category}</h5>
      </div>
      <ul className="stack__lists mt-4">
        {stack.languages.map(language => {
          return (
            <li key={language.id}>
              {language.icon}
              <p className="ml-4">{language.language}</p>
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

  .header {
    display: flex;
    align-items: center;
    font-size: var(--fz-heading-5);
    line-height: var(--lh-heading);
  }

  .stack__lists {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    li {
      display: flex;
      align-items: center;
      p {
        font-size: var(--fz-body);
        line-height: var(--lh-paragraph);
      }
    }
  }
`

export default Stack
