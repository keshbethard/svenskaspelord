import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free bets?" />
    <div className="content-header">
      <h1>Vad betyder free bets?</h1>
      <p>En bonus som casinon erbjuder där du bettar med gratis pengar. Oftast tillkommer omsättningskrav innan uttag är möjlig.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
