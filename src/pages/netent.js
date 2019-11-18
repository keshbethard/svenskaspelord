import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är NetEnt?" />
    <div className="content-header">
      <h1>Vad är NetEnt?</h1>
      <p><a href="https://www.netent.com/" target="_blank">NetEnt</a> är en svensk spelutvecklare av världsklass. Har släppt spel som <Link to="/starburst/">Starburst</Link>, <Link to="/jumanji">Jumanji</Link>, <Link to="/jack-hammer-2">Jack Hammer II</Link> och <Link to="/jack-and-the-beanstalk">Jack and the Beanstalk</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
