import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är D´Alembert system?" />
    <div className="content-header">
      <h1>Vad är D´Alembert system?</h1>
      <p>Ett spelsystem i Roulette där spelaren höjer eller sänker sin insats med ett steg efter varje vinst eller förlust.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
