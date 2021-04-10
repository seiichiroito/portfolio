import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
    </Layout>
  )
}

export default Home
