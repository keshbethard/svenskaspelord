import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder wild?" />
    <div className="content-header">
      <h1>Vad betyder wild?</h1>
      <p>Slotmaskinernas joker som byts ut till vinnande symbol om det ger en vinstlinje.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
