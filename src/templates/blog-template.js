import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
import { AiOutlineLink } from "react-icons/ai"

import Layout from "../components/Layout"
import Evaluation from "../components/utils/Evaluation"
import Seo from "../components/Seo"

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
        twitterImage,
      },
    },
  } = data
  const languages = language.split(",")
  const pickups = pickup.split(",")

  const gatsbyImage = getImage(image.childImageSharp)

  return (
    <Layout>
      <Seo title={date} description={title} image={twitterImage} />
      <Wrapper>
        <div className="container blog__container py-12 px-8">
          <div className="blog__header mb-12">
            <GatsbyImage
              image={gatsbyImage}
              alt={title}
              className="blog__hero-img"
            />
            <div className="blog__title">
              <h3>{title}</h3>
            </div>
            <div className="blog__date">
              <p className="px-2 py-1">{date}</p>
            </div>
            <div className="blog__link mt-3">
              {github && (
                <a href={github}>
                  <FaGithubSquare />
                </a>
              )}
              {siteUrl && (
                <a href={siteUrl} className="ml-4">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            <div className="blog__overview mt-3 md:mt-0">
              <div className="blog__table-title">
                <h3>Overview</h3>
              </div>
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

  .blog__header {
    display: grid;
    grid-template-areas:
      "hero-img"
      "title"
      "date"
      "link"
      "overview";
    grid-template-columns: 1fr;
    gap: 1.5rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 2fr 3fr;
      grid-template-areas:
        "title title"
        ". date"
        "overview hero-img"
        "link hero-img";
    }
  }
  .blog__hero-img {
    grid-area: hero-img;
  }
  .blog__title {
    grid-area: title;
    h3 {
      text-align: center;
      font-size: var(--fz-heading-3);
      line-height: var(--lh-heading);
    }
  }
  .blog__date {
    grid-area: date;
    display: flex;
    justify-content: flex-end;
    p {
      font-size: var(--fz-paragraph);
      background-color: var(--light);
      border-radius: var(--radius);
    }
  }

  .blog__link {
    grid-area: link;

    display: flex;
    justify-content: flex-end;
    a {
      color: var(--dark);
      font-size: var(--fz-heading-5);
      transition: var(--transition);
      &:hover {
        color: var(--primary-5);
        transform: scale(1.2);
      }
    }
  }

  .blog__overview {
    grid-area: overview;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 2px solid var(--dark);
    border-radius: var(--radius);
  }
  .blog__table-title {
    grid-column: 1 / -1;
    h3 {
      font-size: var(--fz-heading-4);
      text-align: center;
    }
  }
  .blog__table-label {
    border-right: 1px solid var(--dark);
    border-top: 1px solid var(--dark);
  }
  .blog__table-content {
    border-top: 1px solid var(--dark);
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
        twitterImage
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
