import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Arabian Nights?" />
    <div className="content-header">
      <h1>Vad är Arabian Nights?</h1>
      <p>En populär jackpot spelautomat från <Link to="/netent">NetEnt</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
