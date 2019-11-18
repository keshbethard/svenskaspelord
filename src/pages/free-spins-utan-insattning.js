import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free spins utan insättning?" />
    <div className="content-header">
      <h1>Vad betyder free spins utan insättning?</h1>
      <p><Link to="/free-spins/">Free spins</Link> som utdelas helt gratis utan att göra en insättning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
