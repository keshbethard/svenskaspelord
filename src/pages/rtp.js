import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder RTP?" />
    <div className="content-header">
      <h1>Vad betyder RTP?</h1>
      <p>Ett känt tärningsspel som är mycket populärt i USA.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
