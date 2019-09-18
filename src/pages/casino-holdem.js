import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Casino Hold'Em?" />
    <div className="content-header">
      <h1>Vad är Casino Hold'Em?</h1>
      <p>Ett populärt kortspel som påminner om den klassiska Poker Hold'Em.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
