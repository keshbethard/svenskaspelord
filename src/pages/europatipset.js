import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Europatipset" />
    <div className="content-header">
      <h1>Europatipset</h1>
      <p>Europatipset är en mycket populär sätt att betta på matcher hos <Link to="/svenska-spel">Svenska Spel</Link>. Du tippar på oavgjort, hemma- eller bortaseger i 13 matcher. Oftast vinner du om du har åtsminstone 10 rätt, men det kan variera beroende hur andra har spelat.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
