import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är PugglePay?" />
    <div className="content-header">
      <h1>Vad är PugglePay?</h1>
      <p>En betaltjänst som erbjuder sätta in pengar på ett spelkonto mot en faktura.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
