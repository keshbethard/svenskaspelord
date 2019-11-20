import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Casino Cosmopol?" />
    <div className="content-header">
      <h1>Vad är Casino Cosmopol?</h1>
      <p>De enda landbaserade casinon som finns i Sverige. Det finns totalt fyra sådanna och de är placerade i Stockholm, Göteborg, Malmö och Sundsvall.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
