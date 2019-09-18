import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder ROI?" />
    <div className="content-header">
      <h1>Vad betyder ROI?</h1>
      <p>Förkortning för return on investment. En vanlig spelterm som betyder avkastning på investeringar.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
