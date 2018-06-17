import React from 'react'
import Card from '@material-ui/core/Card'
import Tile from '../Tile'

import styles from './styles.css'

const Tyler = props => {
  const { tiles, color, opacity, oddClicked, normalClicked } = props
  const tileBasis = 100 / tiles

  const generateMatrix = (
    base,
    color,
    opacity,
    basis,
    oddClicked,
    normalClicked
  ) => {
    const quad = base * base
    const oddBox = Math.floor(Math.random() * quad)
    let boxes = []

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

export default Tyler
