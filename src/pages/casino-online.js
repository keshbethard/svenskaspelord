import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder casino online?" />
    <div className="content-header">
      <h1>Vad betyder casino online?</h1>
      <p>Motsvarigheten till ett vanligt <Link to="/casino">casino</Link> fast på nätet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
