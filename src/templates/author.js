import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.posts.map(post => (
          <li key={post.id}>
            <h2>
              <Link to={`/Post_${post.id}`}>{post.Title}</Link>
            </h2>
            <ReactMarkdown source={post.Content} />
          </li>
        ))}
      </ul>
    </Layout>
  )

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      posts {
        id
        Title
        Content
      }
    }
  }
`
