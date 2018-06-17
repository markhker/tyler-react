import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Title = ({ children }) => {
  return (
    <h1 className={styles.titleContainer}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
