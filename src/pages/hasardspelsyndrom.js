import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder hasardspelsyndrom?" />
    <div className="content-header">
      <h1>Vad betyder hasardspelsyndrom?</h1>
      <p>En diagnos som brukar användas inom vården och är ett annat ord för spelberoende.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
