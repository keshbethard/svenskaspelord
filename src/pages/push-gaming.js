import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Push Gaming?" />
    <div className="content-header">
      <h1>Vad är Push Gaming?</h1>
      <p>Push Gaming är en speltillverkare från London och som grundades år 2010.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
