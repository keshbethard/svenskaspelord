import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free spins?" />
    <div className="content-header">
      <h1>Vad betyder freespins?</h1>
      <p>Gratis snurr på slotmaskiner för riktiga pengar.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
