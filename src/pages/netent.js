import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är NetEnt?" />
    <div className="content-header">
      <h1>Vad är NetEnt?</h1>
      <p>Svensk spelutvecklare av världsklass. Har släppt spel som Starburst, Jack Hammer II och Jack and the Beanstalk.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
