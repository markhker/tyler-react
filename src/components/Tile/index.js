import React from 'react'
import PropTypes from 'prop-types'

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

Tile.propTypes = {
  item: PropTypes.string,
  opacy: PropTypes.number,
  color: PropTypes.string,
  basis: PropTypes.number,
  onClick: PropTypes.func
}

export default Tile
