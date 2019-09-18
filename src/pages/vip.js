import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder VIP?" />
    <div className="content-header">
      <h1>Vad betyder VIP?</h1>
      <p>Översätts från engelska till Very Important Person och innebär att spelaren kan ta del av vissa privilegier.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
