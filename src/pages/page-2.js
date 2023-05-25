import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Helmet>
      <title>Test Title!</title>
      <meta name="description" content="test1" />
      <meta property="og:title" content="test2" />
      <meta property="og:description" content="test3" />
    </Helmet>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
