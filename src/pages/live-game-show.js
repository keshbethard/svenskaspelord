import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder live game show?" />
    <div className="content-header">
      <h1>Vad betyder live game show?</h1>
      <p>Samlingsord för livesända casino spel som till exempel Dream Catcher.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
