import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Quickspin?" />
    <div className="content-header">
      <h1>Vad är Quickspin?</h1>
      <p>Quickspin är ett svenskt företag som utvecklar casinospel. De har sitt huvudkontor i Stockholm. Kända för speltitlar som <Link to="wild-tome-of-the-woods">Wild Tome of the Woods</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
