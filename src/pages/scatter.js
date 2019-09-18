import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder scatter?" />
    <div className="content-header">
      <h1>Vad betyder scatter?</h1>
      <p>En bonus funktion som ger din bonus spins med högre vinstchans.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
