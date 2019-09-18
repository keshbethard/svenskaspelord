import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder re-spin?" />
    <div className="content-header">
      <h1>Vad betyder re-spin?</h1>
      <p>En funktion som ger dig extrasnurr på en slotmaskin.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
