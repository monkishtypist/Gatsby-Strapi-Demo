import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.Title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiPost.author.id}`}>{data.strapiPost.author.username}</Link></p>
    {data.strapiPost.image && (
      <Img fluid={data.strapiPost.image.childImageSharp.fluid}/>
    )}
    <ReactMarkdown source={data.strapiPost.Content} />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      Title
      Content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
