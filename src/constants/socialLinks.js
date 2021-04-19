import React from "react"
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
    <li className="m-1" key={link.id}>
      <a href={link.url}>{link.icon}</a>
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
    transition: var(--transition);
    &:hover {
      transform: scale(1.2);
    }
  }
  a {
    color: var(--dark);
  }
  .social-icon {
    font-size: var(--fz-heading-4);
  }
  @media (min-width: 768px) {
    .social-icon {
      font-size: var(--fz-heading-5);
    }
  }
  &.sidebar-links {
    justify-content: center;
    li {
      /* For animation */
      opacity: 0;
    }
    .social-icon {
      font-size: var(--fz-heading-3);
    }
    /* Animation */
    li {
      animation: slideUp 0.5s ease-in-out 0.3s forwards;
    }
    li:nth-of-type(1) {
      animation-delay: 0.6s;
    }
    li:nth-of-type(2) {
      animation-delay: 0.8s;
    }
    li:nth-of-type(3) {
      animation-delay: 1s;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`

export default SocialLinks
