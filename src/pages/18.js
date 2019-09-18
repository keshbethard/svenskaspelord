import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder 18+?" />
    <div className="content-header">
      <h1>Vad betyder 18+?</h1>
      <p>Symbolen som innebär att du måste vara minst 18 år för att kunna registrera dig och spela.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
