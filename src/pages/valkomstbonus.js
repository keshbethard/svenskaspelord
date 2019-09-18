import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder välkomstbonus?" />
    <div className="content-header">
      <h1>Vad betyder välkomstbonus?</h1>
      <p>Bonuserbjudande du får i samband med registrering hos ett nytt spelbolag.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
