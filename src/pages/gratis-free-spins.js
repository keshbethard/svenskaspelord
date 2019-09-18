import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder gratis free spins?" />
    <div className="content-header">
      <h1>Vad betyder gratis free spins?</h1>
      <p>Du får free spins gratis vid kampanj eller annat evenemang.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
