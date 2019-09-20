import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Blueprint Gaming?" />
    <div className="content-header">
      <h1>Vad är Blueprint Gaming?</h1>
      <p>Blueprint Gaming är en speltillverkare från USA och som tillverkar spel för <Link to="/casino-online">casino online</Link>, <Link to="/mobilcasino">mobilcasinon</Link> och <Link to="/casino">landbaserade casinon</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
