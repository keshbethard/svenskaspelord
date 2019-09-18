import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder esport betting?" />
    <div className="content-header">
      <h1>Vad betyder esport betting?</h1>
      <p>Populär betting kategori för vadslagning om pengar på datorspel.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
