import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Roulette satsningar?" />
    <div className="content-header">
      <h1>Vad är Roulette satsningar?</h1>
      <p>Olika satsningar man gör när man spelar <Link to="/roulette">Roulette</Link>. Det finns många olika sådanna, till exempel: Plein, Cheval, Transversale, Transversale plein avec zero, Carré, Carré avec zero, Sixain, Douzaine, Colonne.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word