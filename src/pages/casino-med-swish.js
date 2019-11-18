import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder casino med Swish?" />
    <div className="content-header">
      <h1>Vad betyder casino med Swish?</h1>
      <p>Casino som erbjuder den populära betalningsmetod <a href="https://www.getswish.se/" target="_blank">Swish</a>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word