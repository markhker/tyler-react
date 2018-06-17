import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import styles from './styles.css'

class SubmitScore extends React.Component {
  state = {
    name: '',
    error: false,
    disabled: true
  }

  handleChange = name => event => {
    const value = event.target.value

    if (value.length >= 3) {
      this.setState({
        disabled: false
      })
    } else {
      this.setState({
        disabled: true
      })
    }
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <Dialog open={this.props.open}>
          <DialogTitle id='form-dialog-title'>Game Over</DialogTitle>
          {!this.props.ready &&
            <React.Fragment>
              <DialogContent>
                <DialogContentText>
                  Send your score, write your nickname
                </DialogContentText>
                <TextField
                  required
                  autoFocus
                  margin='dense'
                  id='name'
                  label='Name'
                  type='text'
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  error={this.state.error}
                  helperText='The nickname must have at least 3 letters'
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handlePlayAgain} color='primary'>
                  Play Again
                </Button>
                <Button
                  onClick={() =>
                    this.props.handleScoreModalReady(this.state.name)}
                  color='primary'
                  disabled={this.state.disabled}
                >
                  Send Score
                </Button>
              </DialogActions>
            </React.Fragment>}
          {this.props.ready &&
            <React.Fragment>
              <DialogContent>
                <DialogContentText>
                  Your score has been sent!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handlePlayAgain} color='primary'>
                  Play Again
                </Button>
              </DialogActions>
            </React.Fragment>}
        </Dialog>
      </div>
    )
  }
}

SubmitScore.propTypes = {
  open: PropTypes.bool,
  ready: PropTypes.bool,
  handlePlayAgain: PropTypes.func,
  handleScoreModalReady: PropTypes.func
}

export default SubmitScore
