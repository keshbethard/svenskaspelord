import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är kuperingskort?" />
    <div className="content-header">
      <h1>Vad är kuperingskort?</h1>
      <p>Ett blankt kort som används vid kupering och indikering som säger att det är dags att blanda kortleken på nytt.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
