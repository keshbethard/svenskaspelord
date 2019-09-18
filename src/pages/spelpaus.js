import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder Spelpaus?" />
    <div className="content-header">
      <h1>Vad betyder Spelpaus?</h1>
      <p>En funktion som gör att du enkelt kan stänga av dig från spel om pengar på samtliga svenska spelbolag samtidigt.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
