import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Quickfire?" />
    <div className="content-header">
      <h1>Vad är Quickfire?</h1>
      <p>Casino spelutvecklare som är känd för speltitlar som Dream Date, Break Away, Thunderstruck och Bar Bar Black Sheep.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
