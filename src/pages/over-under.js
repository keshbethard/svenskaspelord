import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder över/under?" />
    <div className="content-header">
      <h1>Vad betyder över/under?</h1>
      <p>En typ av oddsspel som handlar om det blir över eller under ett resultat, till exempel över 2.5 mål.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
