import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder klassiska slots?" />
    <div className="content-header">
      <h1>Vad betyder klassiska slots?</h1>
      <p>Retroaktiga <Link to="/slots/">slots</Link> som oftast har bara tre hjul.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
