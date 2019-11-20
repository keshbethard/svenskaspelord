import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Roulette system?" />
    <div className="content-header">
      <h1>Vad är Roulette system?</h1>
      <p>Ett system man följer när man spelar <Link to="/roulette">Roulette</Link>. Det finns många olika sådanna, till exempel: Martingale system, <Link to="/dalembert-system">D’Alembert system</Link>, 1-3-2-6 system, Paroli system, Fibonacci system.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word