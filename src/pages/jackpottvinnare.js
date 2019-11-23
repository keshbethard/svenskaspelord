import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder jackpottvinnare?" />
    <div className="content-header">
      <h1>Vad betyder jackpot?</h1>
      <p>En person som har vunnit en <Link to="/jackpot">jackpot</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
