import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är ELK Studios?" />
    <div className="content-header">
      <h1>Vad är ELK Studios?</h1>
      <p>ELK Studios är en spelleverantör som grundades 2012 och som fokuserar på casino spel i mobilen.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
