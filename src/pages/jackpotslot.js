import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder jackpotslot?" />
    <div className="content-header">
      <h1>Vad betyder jackpotslot?</h1>
      <p>Slot som ger chans till jackpot.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
