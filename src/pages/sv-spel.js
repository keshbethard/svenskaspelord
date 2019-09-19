import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Sv Spel" />
    <div className="content-header">
      <h1>Sv Spel</h1>
      <p>Förkortning för <Link to="/svenska-spel">Svenska spel</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
