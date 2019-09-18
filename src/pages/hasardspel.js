import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder hasardspel?" />
    <div className="content-header">
      <h1>Vad betyder hasardspel?</h1>
      <p>Ett spel vars utgång beror på slumpen och inte av de spelandes skicklighet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
