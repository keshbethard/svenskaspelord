import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder casino utan registrering?" />
    <div className="content-header">
      <h1>Vad betyder casino utan registrering?</h1>
      <p>Samma som casino utan konto. Du verifierar din identitet via en app.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
