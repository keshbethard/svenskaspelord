import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Jammin Jars?" />
    <div className="content-header">
      <h1>Vad är Jammin Jars?</h1>
      <p>Ett mycket populär spel från <Link to="/push-gaming">Push Gaming</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
