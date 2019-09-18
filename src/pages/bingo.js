import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är bingo?" />
    <div className="content-header">
      <h1>Vad är bingo?</h1>
      <p>Ett spel där slumpvisa siffror dras och spelarna markerar dessa på spelbrickor med förtryckta siffror i ett rutmönster. Den första spelaren som uppnår ett specifikt mönster ropar "Bingo!".</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
