import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder eye in the sky?" />
    <div className="content-header">
      <h1>Vad betyder eye in the sky?</h1>
      <p>Ett slangord för de övervakningskameror som finns på de landsbaserade casinon.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
