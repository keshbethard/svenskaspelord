import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Yggdrasil Gaming?" />
    <div className="content-header">
      <h1>Vad är Yggdrasil Gaming?</h1>
      <p>Yggdrasil är en spelutvecklare för <Link to="/casino-online/">casino online</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
