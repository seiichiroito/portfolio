import * as Headings from "./Headings"
import * as Table from "./Table"
import Cards from "./Cards"
import References from "./References"

// Component map handed to MDXRemote — replaces the Gatsby MDXProvider in root-mdx.js
export const mdxComponents = {
  // Headings
  h1: Headings.H1,
  h2: Headings.H2,

  // Table
  ul: Table.Ul,
  li: Table.Li,

  // Custom components used inside posts
  Cards,
  References,
}

export { Headings, Table, Cards, References }
