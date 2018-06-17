import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import styles from './styles.css'

const Layout = props => {
  return (
    <div className={styles.container}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={styles.title}>
            Tyler React
          </Typography>
          <Typography
            variant='title'
            color='inherit'
            align='center'
            className={styles.score}
          >
            Score: {props.score}
          </Typography>
          <Button
            variant='outlined'
            color='inherit'
            className={styles.button}
            onClick={props.leaderBoard}
          >
            LeaderBoard
          </Button>
        </Toolbar>
      </AppBar>
      <div className={styles.mainContainer}>
        {props.children}
      </div>
      <p className={styles.pullRight}>
        Made with ❤️ by Marlon Karim
      </p>
    </div>
  )
}

Layout.propTypes = {
  score: PropTypes.number,
  leaderBoard: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Layout
