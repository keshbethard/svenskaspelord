import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder jackpot?" />
    <div className="content-header">
      <h1>Vad betyder jackpot?</h1>
      <p>Högvinst på slotmaskin eller kampanj.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
