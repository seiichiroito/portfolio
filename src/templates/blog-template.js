import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"

import Layout from "../components/Layout"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { category, date, image, title, github, siteUrl },
    },
  } = data
  const gatsbyImage = getImage(image.childImageSharp)

  return (
    <Layout>
      <Wrapper>
        <div className="container blog__container">
          <GatsbyImage image={gatsbyImage} alt={title} className="hero-img" />
          <div className="blog__info">
            <h3>{title}</h3>
            <p>{date}</p>
            <ul className="blog__url">
              {github && (
                <li>
                  <Link to={github}>
                    <FaGithubSquare />
                  </Link>
                </li>
              )}
              {siteUrl && (
                <li>
                  <Link to={siteUrl}>
                    <FaExternalLinkAlt />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  background-color: var(--white);
  min-height: calc(100vh - var(--h-header) - var(--h-footer));

  .blog__container {
    max-width: 1000px;
    padding: 3rem 0;
  }
  .blog__info {
    margin: 1rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h3 {
      text-align: center;
      align-self: center;
      margin-top: 1rem;
      font-size: var(--fz-heading-3);
      line-height: var(--lh-heading);
    }
    p {
      text-align: center;
      margin-top: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: var(--fz-paragraph);
      background-color: var(--light);
      display: inline-block;
      border-radius: var(--radius);
    }
  }
  .blog__url {
    margin-top: 1rem;
    display: flex;
    li {
      transition: var(--transition);
      &:hover {
        transform: scale(1.2);
      }
    }
    li + li {
      margin-left: 1rem;
    }
    a {
      color: var(--dark);
      font-size: var(--fz-heading-6);
      &:hover {
        color: var(--primary-5);
      }
    }
  }
`

export const query = graphql`
  query GetSingleBlog($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMM Do, YYYY")
        title
        github
        siteUrl
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
