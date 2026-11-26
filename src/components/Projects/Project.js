"use client"

import React from "react"
import Image from "next/image"
import styled from "styled-components"

// 作品カード: サムネ・サイト名・どんなサイトか だけを出す。
// 公開先が無い作品(url なし)は、ソースコードへつなぐ。
const Project = ({ project }) => {
  const href = project.url || project.github
  return (
    <Wrapper>
      <a
        className="card"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} (opens in a new tab)`}
      >
        {project.image && (
          <span className="thumb">
            <Image
              src={project.image.src}
              alt={project.title}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            />
          </span>
        )}
        <span className="body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </span>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--card);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    overflow: hidden;
    color: var(--ink);
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      transform: translateY(-4px);
      h5 {
        color: var(--accent-ink);
      }
    }
    &:focus-visible {
      outline: 2px solid var(--primary-5);
      outline-offset: 4px;
    }
  }
  .thumb {
    display: block;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background-color: var(--soft);
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  .body {
    display: block;
    padding: 1rem 1.25rem 1.25rem;
  }
  h5 {
    font-size: var(--fz-heading-6);
    line-height: var(--lh-heading);
    font-weight: bold;
    transition: var(--transition);
  }
  p {
    margin-top: 0.5rem;
    font-size: var(--fz-paragraph);
    line-height: var(--lh-paragraph);
  }
  @media (prefers-reduced-motion: reduce) {
    .card,
    h5 {
      transition: none;
    }
    .card:hover {
      transform: none;
    }
  }
`

export default Project
