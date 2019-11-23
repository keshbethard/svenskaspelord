import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder random wild?" />
    <div className="content-header">
      <h1>Vad betyder random wild?</h1>
      <p>En <Link to="/wild/">wild-symbol</Link> som delas ut slumpmässigt.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
