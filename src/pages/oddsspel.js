import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder oddsspel?" />
    <div className="content-header">
      <h1>Vad betyder oddsspel?</h1>
      <p>Det finns olika typ av oddsspel man kan spela på. De vanligaste är 1X2, handikapp och över/under.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
