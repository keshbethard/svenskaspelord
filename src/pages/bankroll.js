import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder bankroll?" />
    <div className="content-header">
      <h1>Vad betyder bankroll?</h1>
      <p>På svenska bankrulle och beskriver ditt spelsaldo.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
