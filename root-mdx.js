import React from "react"
import {MDXProvider} from "@mdx-js/react"

const components = {
  h1: () => {
    return <h1>Hello, from root mdx!</h1>
  },
}

export const wrapMDX = ({element}) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}