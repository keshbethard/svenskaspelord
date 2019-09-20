import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Trustly casino" />
    <div className="content-header">
      <h1>Trustly casino</h1>
      <p>Casinon som erbjuder insättningar och uttag med Trustly.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
