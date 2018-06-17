import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'

const NoMatch = () => {
  return (
    <Layout>
      <p>Page not Found</p>
      <Link to='/'>Go back to Home</Link>
    </Layout>
  )
}

export default NoMatch
