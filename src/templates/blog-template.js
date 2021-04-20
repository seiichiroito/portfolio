import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
import { AiOutlineLink } from "react-icons/ai"

import Layout from "../components/Layout"
import Evaluation from "../components/utils/Evaluation"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: {
        date,
        image,
        title,
        github,
        siteUrl,
        origin,
        creatingTime,
        difficulty,
        language,
        pickup,
      },
    },
  } = data
  const languages = language.split(",")
  const pickups = pickup.split(",")

  const gatsbyImage = getImage(image.childImageSharp)

  return (
    <Layout>
      <Wrapper>
        <div className="container blog__container py-5">
          <GatsbyImage image={gatsbyImage} alt={title} className="hero-img" />
          <div className="blog__info mb-5">
            <h3 className="mt-3">{title}</h3>
            <p className="mt-3 px-2 py-1">{date}</p>
            <ul className="blog__url mt-3">
              {github && (
                <li>
                  <a href={github}>
                    <FaGithubSquare />
                  </a>
                </li>
              )}
              {siteUrl && (
                <li>
                  <a href={siteUrl}>
                    <FaExternalLinkAlt />
                  </a>
                </li>
              )}
            </ul>
            <div className="blog__table mt-3">
              <div className="blog__table-label px-3 py-2">Origin</div>
              <div className="blog__table-content blog__table-content--origin px-3 py-2">
                <p>{origin}</p>
                <a href={origin}>
                  <AiOutlineLink />
                </a>
              </div>

              <div className="blog__table-label px-3 py-2">Difficulty</div>
              <div className="blog__table-content px-3 py-2">
                <Evaluation star={difficulty} />
              </div>

              <div className="blog__table-label px-3 py-2">Creating Time</div>
              <div className="blog__table-content px-3 py-2">
                {creatingTime} hours
              </div>

              <div className="blog__table-label px-3 py-2">Language</div>
              <div className="blog__table-content px-3 py-2">
                {languages.map((language, i) => (
                  <p key={i}>{language}</p>
                ))}
              </div>

              <div className="blog__table-label px-3 py-2">pickup</div>
              <div className="blog__table-content px-3 py-2">
                {pickups.map((pickup, i) => (
                  <p key={i}>{pickup}</p>
                ))}
              </div>
            </div>
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
  }
  .blog__info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > h3 {
      text-align: center;
      align-self: center;
      font-size: var(--fz-heading-3);
      line-height: var(--lh-heading);
    }
    > p {
      text-align: center;
      font-size: var(--fz-paragraph);
      background-color: var(--light);
      display: inline-block;
      border-radius: var(--radius);
    }
  }
  .blog__url {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    li {
      transition: var(--transition);
      &:hover {
        transform: scale(1.2);
      }
    }
    a {
      color: var(--dark);
      font-size: var(--fz-heading-5);
      &:hover {
        color: var(--primary-5);
      }
    }
  }

  .blog__table {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 2px solid var(--dark);
    border-radius: var(--radius);
  }
  .blog__table-label {
    border-right: 1px solid var(--dark);
    border-bottom: 1px solid var(--dark);
  }
  .blog__table-content {
    border-bottom: 1px solid var(--dark);
    a {
      color: var(--dark);
      font-size: var(--fz-body);
      display: flex;
      &:hover {
        transform: scale(1.2);
      }
    }
    p {
      line-height: var(--lh-paragraph);
    }
    &--origin {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        origin
        creatingTime
        difficulty
        language
        pickup
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
