import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Mega Fortune?" />
    <div className="content-header">
      <h1>Vad är Mega Fortune?</h1>
      <p>Mycket populärt spel från <Link to="/netent">NetEnt</Link>. Spelet har en progressiv jackpot som har är känt för att ha betalat ut den största vinsten.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
