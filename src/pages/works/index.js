import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const WorksPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <ul>
      {data.allMicrocmsPortfolio.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={`/works/${node.id}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default WorksPage


export const query = graphql`
  query {
    allMicrocmsPortfolio {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`