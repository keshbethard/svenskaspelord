import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder gratissnurr?" />
    <div className="content-header">
      <h1>Vad betyder gratissnurr?</h1>
      <p>Gratissnurr är ett annat ord på <Link to="/freespins/">freespins</Link> och syftar på snurr om riktiga pengar som inte kostar något.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
