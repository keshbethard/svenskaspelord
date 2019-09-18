import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder win both ways?" />
    <div className="content-header">
      <h1>Vad betyder win both ways?</h1>
      <p>Möjlighet att få vinstlinje från både vänster och höger på slothjulet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
