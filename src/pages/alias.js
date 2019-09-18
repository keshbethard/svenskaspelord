import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder alias?" />
    <div className="content-header">
      <h1>Vad betyder alias?</h1>
      <p>Ett alias är ett namn som används av en person, annat än det borgerliga namnet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
