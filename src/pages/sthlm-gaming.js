import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Sthlm Gaming?" />
    <div className="content-header">
      <h1>Vad är Sthlm Gaming?</h1>
      <p>En spelutvecklare som grundades 2016. De släppte sitt första spel 2017. Känd för casinospel som Sunset, Boost It, Casino on the House, Perfect Catch och The Golden Chase.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
