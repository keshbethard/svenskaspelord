import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Jack and the Beanstalk?" />
    <div className="content-header">
      <h1>Vad är Jack and the Beanstalk?</h1>
      <p>En av de populäraste <Link to="/netent/">NetEnt</Link> slots genom tiderna. Har även den populära walking wild funktionen.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
