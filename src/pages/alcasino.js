import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Alcasino.se?" />
    <div className="content-header">
      <h1>Vad är Alcasino.se?</h1>
      <p>Sveriges bästa jämnförelsetjänst för <a href="https://alcasino.se" target="_blank">online casino</a>och <a href="https://alcasino.se/online-betting/" target="_blank">online betting</a> på den svenska marknaden.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
