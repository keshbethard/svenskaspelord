import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder T&C?" />
    <div className="content-header">
      <h1>Vad betyder T&C?</h1>
      <p>Förkortning för Terms & Conditions. På svenska regler och villkor.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
