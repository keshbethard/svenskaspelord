import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder Authentic Gaming?" />
    <div className="content-header">
      <h1>Vad betyder Authentic Gaming?</h1>
      <p>Känd spelutvecklare som har <Link to="/dealer">live casino</Link> som huvudfokus.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
