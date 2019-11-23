import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Megaways?" />
    <div className="content-header">
      <h1>Vad är Megaways?</h1>
      <p>Den klassiska funktionaliteten för spelautomater är att man har 5 hjul och 3 rader. Megaways är ett ny uppfinning av <Link to="/big-time-gaming/">Big Time Gaming</Link> där antal rader slumpas ut vid varje snurr. Detta kan i sin tur skapa massor av olika kombinationer och sätt att vinna på.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
