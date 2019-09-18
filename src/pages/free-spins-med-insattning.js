import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free spins med insättning?" />
    <div className="content-header">
      <h1>Vad betyder free spins med insättning?</h1>
      <p>Free spins som utdelas vid insättning av angiven summa.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
