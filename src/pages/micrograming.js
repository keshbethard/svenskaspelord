import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Microgaming?" />
    <div className="content-header">
      <h1>Vad är Microgaming?</h1>
      <p>Är den första och en av de största spelutvecklare för casino online.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
