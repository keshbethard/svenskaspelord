import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Yggdrasil Gaming?" />
    <div className="content-header">
      <h1>Vad är Yggdrasil Gaming?</h1>
      <p>En typ av oddsspel som handlar framförallt om skillnaden mellan motståndare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
