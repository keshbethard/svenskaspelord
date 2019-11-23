import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Dagens freespin" />
    <div className="content-header">
      <h1>Dagens freespin</h1>
      <p>Dagens freespin syftar på nya <Link to="/gratissnurr/">gratissnurr</Link> som erbjuds idag. Du kan hitta de bästa <a href="https://alcasino.se/freespins">freespins hos Alcasino</a> då de uppdaterar sitt innehåll dagligen.</p>
      <br/>
      <p>Det kan vara bra att notera att i Sverige ett online casino får erbjuda max en casino bonus per person och den måste hämtas ut vid första insättning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
