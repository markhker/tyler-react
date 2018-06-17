import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import { getTopN } from '../../helpers/helpers'

import styles from './styles.css'

const Transition = props => {
  return <Slide direction='up' {...props} />
}

class LeaderBoard extends React.Component {
  render () {
    const topScores = this.props.data
      ? getTopN(this.props.data, 'score', 5)
      : undefined

    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleClose}
        >
          <DialogTitle>
            Leader Board
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={styles.content}>
              {this.props.data &&
                topScores.map((data, idx) => (
                  <span key={idx} className={styles.score}>
                    <span className={styles.number}>{idx + 1}</span>
                    <span className={styles.name}>{data.nickname}</span>
                    <span className={styles.scoreNumber}>{data.score}</span>
                  </span>
                ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color='primary'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

LeaderBoard.propTypes = {
  data: PropTypes.array,
  open: PropTypes.bool,
  handleClose: PropTypes.func
}

export default LeaderBoard
