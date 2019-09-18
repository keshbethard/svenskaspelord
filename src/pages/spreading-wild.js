import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder spreading wild?" />
    <div className="content-header">
      <h1>Vad betyder spreading wild?</h1>
      <p>En sorts wild bonus som gör att du får fler wilds än den du fått på hjulet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
