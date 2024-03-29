import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är turnering?" />
    <div className="content-header">
      <h1>Vad är turnering?</h1>
      <p>En turnering som anordnas av ett casino och kan vara i olika former och oftast går ut på att samla poäng. Spelare som vinner oftast delar på en summa pengar, freespins eller andra priser.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
