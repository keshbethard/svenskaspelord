import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är IGT?" />
    <div className="content-header">
      <h1>Vad är IGT?</h1>
      <p>IGT står för International Game Technology och är ett företag som har skapat slots åt landsbaserade casinon. Idag utvecklar IGT även digitala spel som erbjuds överallt runt om i världen.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
