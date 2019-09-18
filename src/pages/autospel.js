import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder autospel?" />
    <div className="content-header">
      <h1>Vad betyder autospel?</h1>
      <p>Funktion som gör att du slipper trycka själv för att få slots hjulen att snurra.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
