import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Betsoft?" />
    <div className="content-header">
      <h1>Vad är Betsoft?</h1>
      <p>Ett mycket känt företag som utvecklar casinospel. Betsoft står för speltitlar bland annat som Gypsy Rose, The Tipsy Tourist, Chilipop Slot, Tiger's Claw, Ogre Empire och Bloog Eternal  </p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
