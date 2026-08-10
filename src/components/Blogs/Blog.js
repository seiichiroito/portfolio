"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

import Underline from "../utils/Underline"

const Blog = ({ blog }) => {
  const {
    frontmatter: { title, category, date, slug, image },
  } = blog

  return (
    <Wrapper>
      <Link href={`/blog/${slug}`} className="blog-link">
        <div className="hero">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <aside className="p-4">
          <div className="main">
            <h5>{title}</h5>
            <Underline styleClass="mt-1" />
          </div>
          <div className="footer mt-3">
            <ul className="categories">
              <li className="p-1">{category}</li>
            </ul>
            <p className="date">{date}</p>
          </div>
        </aside>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  .blog-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: var(--transition);
    flex: 1;
    &:hover {
      transform: scale(1.02);
    }
  }
  box-shadow: var(--dark-shadow);
  border-radius: var(--radius);
  .hero {
    height: 200px;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  aside {
    flex: 1;
    background-color: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main {
    color: var(--dark);

    h5 {
      line-height: var(--lh-heading);
      font-size: var(--fz-heading-5);
      font-weight: bold;
    }
    p {
      font-size: var(--fz-body);
      line-height: var(--lh-paragraph);
    }
  }
  .footer {
    color: var(--primary-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .categories {
      display: flex;
      gap: 1rem;
      li {
        border: 1px solid var(--primary-5);
        border-radius: var(--radius);
        color: var(--primary-5);
        font-size: var(--fz-paragraph);
        &:hover {
          color: var(--light);
          background-color: var(--primary-5);
        }
      }
    }
  }
`
export default Blog
