import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as leaderBoardActions from '../../reducers/LeaderBoard'
import { Link } from 'react-router-dom'
import { getHex } from '../../helpers/randomColor'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Tyler from '../../components/Tyler'
import SubmitScore from '../../components/SubmitScore'
import LeaderBoard from '../../components/LeaderBoard'

class Home extends React.Component {
  state = {
    score: 0,
    name: '',
    tiles: 2,
    color: getHex(),
    opacity: 0.77,
    scoreModal: false,
    leaderModal: false,
    over: false,
    leaderReady: false
  }

  componentWillMount () {
    this.props.actionFetchLeaderBoard()
  }

  increaseTilesNumber = () => {
    this.setState({
      score: this.state.score + 1,
      tiles: this.state.tiles + 1,
      color: getHex(),
      opacity: this.state.opacity + 0.004
    })
  }

  gameOver = () => {
    this.setState({
      scoreModal: true,
      over: true
    })
  }

  handleScoreModalClose = () => {
    this.setState({
      scoreModal: false
    })
  }

  handleScoreModalReady = name => {
    const { score } = this.state
    this.setState(
      {
        leaderReady: true,
        name
      },
      () => {
        this.props.actionSendScore({ name, score })
      }
    )
  }

  handleLeaderModalOpen = () => {
    this.setState({
      leaderModal: true
    })
  }

  handleLeaderModalClose = () => {
    this.setState({
      leaderModal: false
    })
  }

  handlePlayAgain = () => {
    location.reload()
  }

  render () {
    return (
      <Layout score={this.state.score} leaderBoard={this.handleLeaderModalOpen}>
        <Title>Find the different tile</Title>
        <Tyler
          tiles={this.state.tiles}
          color={this.state.color}
          oddClicked={this.increaseTilesNumber}
          normalClicked={this.gameOver}
          opacity={this.state.opacity}
        />
        <SubmitScore
          open={this.state.scoreModal}
          handleScoreModalReady={this.handleScoreModalReady}
          handleClose={this.handleScoreModalClose}
          handlePlayAgain={this.handlePlayAgain}
          setName={this.setName}
          ready={this.state.leaderReady}
        />
        <LeaderBoard
          open={this.state.leaderModal}
          handleClose={this.handleLeaderModalClose}
          data={this.props.leaderBoard}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaderBoard: state.leaderBoardReducer.allLeaderBoard.data
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...leaderBoardActions
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
