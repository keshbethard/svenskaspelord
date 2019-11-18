import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Gonzo's Quest?" />
    <div className="content-header">
      <h1>Vad är Gonzo's Quest?</h1>
      <p>Otroligt populär videoslot från <Link to="/netent/">NetEnt</Link> med fortsatt spel efter vunnen rad.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
