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
  font-size: var(--fz-body);
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
  &.sidebar-links {
    flex-direction: column;
    li {
      /* For animation */
      opacity: 0;
    }
    a {
      flex: 1;
      text-align: center;
      color: var(--dark);
      font-size: var(--fz-heading-4);
      padding: 1rem 4rem;
      &:hover {
        color: var(--white);
      }
    }
    /* Animation */
    li {
      animation: slideRight 0.5s ease-in-out 0.3s forwards;
    }
    li:nth-of-type(1) {
      animation-delay: 0.2s;
    }
    li:nth-of-type(2) {
      animation-delay: 0.4s;
    }
    li:nth-of-type(3) {
      animation-delay: 0.6s;
    }
    li:nth-of-type(4) {
      animation-delay: 0.8s;
    }
    li:nth-of-type(5) {
      animation-delay: 1s;
    }
    @keyframes slideRight {
      0% {
        transform: translateX(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`
export default NavLinks
