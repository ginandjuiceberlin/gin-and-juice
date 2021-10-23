import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider } from "@mui/system"

import Layout from "../components/layout"
import Seo from "../components/seo"
import theme from "../theme/AppTheme"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Header siteTitle="test" />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
