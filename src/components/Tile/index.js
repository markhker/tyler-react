import React from 'react'

import styles from './styles.css'

const Tile = props => {
  let oddColor = props.item === 'odd' ? props.opacy : 1
  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: `${props.color}`,
        flexBasis: `${props.basis}%`,
        opacity: `${oddColor}`
      }}
      onClick={props.onClick}
    />
  )
}

export default Tile
