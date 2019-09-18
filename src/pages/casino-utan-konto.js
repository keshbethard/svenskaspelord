import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder casino utan konto?" />
    <div className="content-header">
      <h1>Vad betyder casino utan konto?</h1>
      <p>Casino som du kan logga in på med hjälp av BankID.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
