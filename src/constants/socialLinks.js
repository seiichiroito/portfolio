import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa"

const data = [
  {
    id: 1,
    url: "https://twitter.com/seiichiro_dev",
    icon: <FaTwitterSquare className="social-icon" />,
  },
  {
    id: 2,
    url: "https://github.com/seiichiroito",
    icon: <FaGithubSquare className="social-icon" />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/seiichiro-ito-2938861a1/",
    icon: <FaLinkedin className="social-icon" />,
  },
]

const socialLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.icon}</Link>
    </li>
  )
})

const SocialLinks = ({ styleClass }) => {
  return (
    <Links className={`${styleClass ? styleClass : ""}`}>{socialLinks}</Links>
  )
}

const Links = styled.ul`
  display: flex;
  li {
    margin: 8px;
  }
  a {
    color: var(--dark);
  }
  .social-icon {
    font-size: var(--fz-heading-5);
  }
`

export default SocialLinks
