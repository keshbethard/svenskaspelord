import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder bettingsida?" />
    <div className="content-header">
      <h1>Vad betyder bettingsida?</h1>
      <p>En webbsida som erbjuder spel om pengar där man satsar på matcher eller andra evenemang.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
