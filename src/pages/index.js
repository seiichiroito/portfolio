import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Stacks from "../components/Stacks"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Stacks />
    </Layout>
  )
}

export default Home
