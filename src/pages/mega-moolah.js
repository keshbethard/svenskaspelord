import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Mega Moolah?" />
    <div className="content-header">
      <h1>Vad är Mega Moolah?</h1>
      <p>Jackpotslot som har delat ut de största vinsterna någonsin på <Link to="/casino-online">casino online</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
