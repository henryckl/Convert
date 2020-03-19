import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import BinaryToDecimal from "../components/BinaryToDecimal"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BinaryToDecimal />
    </Layout>
  )
}

export default IndexPage
