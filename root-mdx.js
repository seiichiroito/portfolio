import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { Headings, Table } from "./src/components/MDX"

const components = {
  // Headings
  h1: Headings.H1,
  h2: Headings.H2,

  // Table
  ul: Table.Ul,
  li: Table.Li,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
