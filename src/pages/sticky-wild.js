import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder sticky wild?" />
    <div className="content-header">
      <h1>Vad betyder sticky wild?</h1>
      <p>En wild som stannar kvar tills dina bonus spins är över.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
