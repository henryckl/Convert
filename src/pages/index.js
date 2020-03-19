import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => {
  const [binaryNumber, setBinary] = useState("")
  const [decimalNumber, setDecimal] = useState("")

  const b2d = number => {
    let decimalResult = 0
    const reverseInput = number
      .split("")
      .reverse()
      .join("")

    reverseInput
      .split("")
      .map(
        (char, index) =>
          (decimalResult = decimalResult + 2 ** index * parseInt(char))
      )

    setDecimal(decimalResult)
  }

  const binaryHandle = event => {
    const number = event.target.value
    const binary = number.replace(/[^0-1]/g, "")
    // if (binary.length < 9) {
    //   setBinary(binary)
    //   b2d(binary)
    // }
    setBinary(binary)
    b2d(binary)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <label htmlFor="binary">Binary</label>
      <input
        type="name"
        value={binaryNumber}
        name="binary"
        onChange={binaryHandle}
      />
      <label htmlFor="decimal">Decimal</label>
      <input type="name" defaultValue={decimalNumber} name="decimal" />
    </Layout>
  )
}

export default IndexPage
