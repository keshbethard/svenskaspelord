import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är casino?" />
    <div className="content-header">
      <h1>Vad är casino?</h1>
      <p>En verksamhet som erbjuder hasardspel. Detta kan inkludera allt från roulette, kortspel och spelautomater.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
