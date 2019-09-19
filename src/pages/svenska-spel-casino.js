import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Svenska Spel casino" />
    <div className="content-header">
      <h1>Svenska Spel casino</h1>
      <p>Den officiella Svenska Spel <Link to="/casino">casino</Link> produkt. Du kan besöka den <a href="https://spela.svenskaspel.se/casino" target="_blank" rel="nofollow">här</a>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
