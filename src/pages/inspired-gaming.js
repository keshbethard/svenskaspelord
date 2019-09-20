import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Inspired Gaming?" />
    <div className="content-header">
      <h1>Vad är Inspired Gaming?</h1>
      <p>En speltillverkare som har skapat speltitlar som Emerald Smash, Rise of Anubis, Super Hot Fruits, Big 500 Slot, Centurion och Centurion Freespins.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
