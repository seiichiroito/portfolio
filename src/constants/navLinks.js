import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
const NavLinks = ({ styleClass }) => {
  return (
    <Links className={`${styleClass ? styleClass : ""}`}>{tempLinks}</Links>
  )
}

const Links = styled.ul`
  display: flex;
  height: 100%;
  &.header-links {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  li {
    display: flex;
    align-items: center;
  }
  a {
    color: var(--light);
    padding: 1rem;
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      background-color: var(--primary-5);
      color: var(--white);
    }
  }
`
export default NavLinks
