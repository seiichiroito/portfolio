// Data made available to each post's MDX body (replaces in-MDX import
// statements, which next-mdx-remote does not evaluate). Keyed by slug.
import {
  codeApp,
  designApp,
  productivityApp,
  deployApp,
  libraryApp,
} from "./first-post/sample"

const scopes = {
  "atom-clone": { codeApp, designApp, productivityApp, deployApp, libraryApp },
}

export const getScope = slug => scopes[slug] ?? {}
