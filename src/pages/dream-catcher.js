import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Dream Catcher?" />
    <div className="content-header">
      <h1>Vad är Dream Catcher?</h1>
      <p>Ett populär casino spel som spelas live och är påminner om den klassiska spelet Lyckohjulet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
