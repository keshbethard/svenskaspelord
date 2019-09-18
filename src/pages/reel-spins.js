import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder reel spins?" />
    <div className="content-header">
      <h1>Vad betyder reel spins?</h1>
      <p> Sparar dina bra symboler på hjulet och snurrar de sämre för en chans till högvinst.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
