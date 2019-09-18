import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder RNG?" />
    <div className="content-header">
      <h1>Vad betyder RNG?</h1>
      <p>Förkortning för random number generator. På svenska slumpmässig nummergenerator.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
