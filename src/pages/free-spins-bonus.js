import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free spins bonus?" />
    <div className="content-header">
      <h1>Vad betyder free spins bonus?</h1>
      <p>Ett bonuserbjudande som erbjuder free spins.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
