import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Neteller?" />
    <div className="content-header">
      <h1>Vad är Neteller?</h1>
      <p><a href="https://www.neteller.com/sv" target="_blank">Neteller</a> är en virtuell plånbok som är mycket populär för spel om pengar på nätet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
