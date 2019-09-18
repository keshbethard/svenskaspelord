import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Xpro Gaming?" />
    <div className="content-header">
      <h1>Vad är Xpro Gaming?</h1>
      <p>Förkortning XPG, är en live casino spelutvecklare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
