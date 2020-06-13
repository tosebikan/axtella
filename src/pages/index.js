import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <button>+233 54 135 6456</button>
      <h1>FIND YOUR DREAM HOME TODAY</h1>
      <p>Contact Axtella for all your Construction & Real Estate Services.</p>
      <button>Contact us</button>
     </div>
    </div>
    <div>
    </div>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
