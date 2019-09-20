import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Kalamba?" />
    <div className="content-header">
      <h1>Vad är Kalamba?</h1>
      <p>Kalamba en internationell speltillverkare som släppte sin första spelautomat 2017. Speltillverkaren är baserad på Malta och Krakow.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
