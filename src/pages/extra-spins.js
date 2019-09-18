import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder extra spins?" />
    <div className="content-header">
      <h1>Vad betyder extra spins?</h1>
      <p>Aktiveras om du får en fler specifika symboler i en slotmaskin.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
