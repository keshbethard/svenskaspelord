import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Wild Tome of the Woods?" />
    <div className="content-header">
      <h1>Vad är Wild Tome of the Woods?</h1>
      <p>Populärt <Link to="/slots">slots</Link> spel från spelleverantören <Link to="/quickspin">Quickspin</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
