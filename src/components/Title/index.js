import React from 'react'

import styles from './styles.css'

const Title = ({ children }) => {
  return (
    <h1 className={styles.titleContainer}>
      {children}
    </h1>
  )
}

export default Title
