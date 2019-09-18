import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder sure bets?" />
    <div className="content-header">
      <h1>Vad betyder sure bets?</h1>
      <p>Är en känt fenomen inom betting online där satsningen är helt säker. Kortfattat innebär det att man utnyttjar obalanser i marknaden.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
