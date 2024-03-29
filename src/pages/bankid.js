import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är BankID?" />
    <div className="content-header">
      <h1>Vad är BankID?</h1>
      <p><a href="https://www.bankid.com/" target="_blank">BankID</a> är en elektronisk legitimation. Den kan användas för att logga in på casinon eller för att göra en insättning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
