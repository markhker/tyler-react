import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Tile from '../Tile'

import styles from './styles.css'

const Tyler = props => {
  const { tiles, color, opacity, oddClicked, normalClicked } = props

  // Get the tile flex-basis according to the number of tiles
  const tileBasis = 100 / tiles

  // Function that generates the matrix of tiles
  const generateMatrix = (
    base,
    color,
    opacity,
    basis,
    oddClicked,
    normalClicked
  ) => {
    const quad = base * base // Get the total number of tiles
    const oddBox = Math.floor(Math.random() * quad) // Get a random tile from the matrix
    let boxes = [] // Here I add the generated tiles

    for (let i = 0; i < quad; i++) {
      if (oddBox === i) {
        boxes.push(
          <Tile
            key={i}
            color={color}
            basis={basis}
            item='odd'
            opacy={opacity}
            onClick={oddClicked}
          />
        )
      } else {
        boxes.push(
          <Tile
            key={i}
            color={color}
            basis={basis}
            item='normal'
            opacy={opacity}
            onClick={normalClicked}
          />
        )
      }
    }

    return boxes
  }

  const boxes = generateMatrix(
    tiles,
    color,
    opacity,
    tileBasis,
    oddClicked,
    normalClicked
  )

  return (
    <Card className={styles.tylerContainer}>
      {boxes}
    </Card>
  )
}

Tyler.propTypes = {
  tiles: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number,
  oddClicked: PropTypes.func,
  normalClicked: PropTypes.func
}

export default Tyler
