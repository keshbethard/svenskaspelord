import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder dealer?" />
    <div className="content-header">
      <h1>Vad betyder dealer?</h1>
      <p> Person anställd av ett casino som sköter blandandet och utdelandet av spelkort och marker i spel.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
