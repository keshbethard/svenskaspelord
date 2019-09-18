import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder cash drop?" />
    <div className="content-header">
      <h1>Vad betyder cash drop?</h1>
      <p>En kampanj som innebär att spelbolag slumpvis delar ut en viss summa pengar till utvalda spelare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
