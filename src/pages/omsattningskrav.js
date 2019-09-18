import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder omsättningskrav?" />
    <div className="content-header">
      <h1>Vad betyder omsättningskrav?</h1>
      <p>Krav på omsättnings av pengar du erhållit i samband med en bonus eller gratis snurr.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
