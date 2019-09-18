import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder höga odds?" />
    <div className="content-header">
      <h1>Vad betyder höga odds?</h1>
      <p>Något som är osannolikt att inträffa. Motsatts till låga odds.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
