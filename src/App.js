import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import ChoiceImage from './component/ChoiceImage'

import {
  MainCard,
  ScoreMain,
  ScoreCard,
  ScoreHead,
  ScorePara,
  ResultCard,
  ResultImageCard,
  AgainBtn,
  RuleBtn,
  Image,
  ChoiceCard,
} from './style'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    randomChoice: {},
    selectChoice: {},
    isPlay: true,
    res: '',
    attemts: 0,
  }

  componentDidMount() {
    this.getRandomChoice()
  }

  getRandomChoice = () => {
    const random = choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState({randomChoice: random})
  }

  getResult = () => {
    const {randomChoice, selectChoice} = this.state
    if (
      (selectChoice.id === 'PAPER' && randomChoice.id === 'ROCK') ||
      (selectChoice.id === 'SCISSORS' && randomChoice.id === 'PAPER') ||
      (selectChoice.id === 'ROCK' && randomChoice.id === 'SCISSORS')
    ) {
      this.setState(prev => ({score: prev.score + 1, res: 'YOU WON'}))
    } else if (selectChoice.id === randomChoice.id) {
      this.setState({res: 'IT IS DRAW'})
    } else {
      this.setState(prev => ({score: prev.score - 1, res: 'YOU LOSE'}))
    }
  }

  onClickImage = item => {
    // console.log(id)
    this.setState(
      prev => ({attemts: prev.attemts + 1, isPlay: false, selectChoice: item}),
      this.getResult,
    )
  }

  onClickAgain = () => {
    this.setState({isPlay: true}, this.getRandomChoice)
  }

  onClickReset = () => {
    this.setState({score: 0, isPlay: true, res: '', attemts: 0}, this.getRandomChoice)
  }

  displayResult = () => {
    const {randomChoice, selectChoice, res} = this.state
    return (
      <ResultCard>
        <ResultImageCard>
          <div className="res-img-card">
            <h1 className="res-head">YOU</h1>
            <Image src={selectChoice.imageUrl} alt="your choice" />
          </div>
          <div className="res-img-card">
            <h1 className="res-head">OPPONENT</h1>
            <Image src={randomChoice.imageUrl} alt="opponent choice" />
          </div>
        </ResultImageCard>
        <p>{res}</p>
        <AgainBtn type="button" onClick={this.onClickAgain}>
          PLAY AGAIN
        </AgainBtn>
      </ResultCard>
    )
  }

  render() {
    const {score, isPlay, attemts} = this.state
    return (
      <MainCard>
        <ScorePara
          style={{
            color: '#ffffff',
            fontFamily: 'Arial',
            margin: '0px 0px 20px 0px',
            textAlign: 'center',
          }}
        >
          Veeresh Rock-Paper-Scissors Game
        </ScorePara>
        <ScoreMain>
          <div>
            <ScoreHead>Rock Paper Scissors</ScoreHead>
          </div>
          <ScoreHead as="p" className="attemt-para">
            Attempt: <span>{attemts}</span>
          </ScoreHead>
          <div>
            <ScoreCard>
              <ScoreHead as="p">Score</ScoreHead>
              <ScorePara>{score}</ScorePara>
            </ScoreCard>
          </div>
        </ScoreMain>
        {isPlay ? (
          <>
            <p
              style={{
                color: 'lightblue',
                fontFamily: 'Arial',
                margin: '20px 0px 0px 0px',
                textAlign: 'center',
              }}
            >
              Check The Rule Of The Game & Click A Picture To Play The Game
            </p>
            <ChoiceCard>
              {choicesList.map(each => (
                <ChoiceImage
                  item={each}
                  key={each.id}
                  clickImage={this.onClickImage}
                />
              ))}
            </ChoiceCard>
            <AgainBtn
              onClick={this.onClickReset}
              type='Button'
              style={{
                color: '#000000',
                fontFamily: 'Arial',
                fontWeight: 800,
                textAlign: 'center',
              }}
            >Reset</AgainBtn>
          </>
        ) : (
          this.displayResult()
        )}
        <Popup modal trigger={<RuleBtn type="button">RULES</RuleBtn>}>
          {close => (
            <>
              <div className="pop">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
              <button type="button" onClick={() => close()}>
                <RiCloseLine size="23" />
              </button>
            </>
          )}
        </Popup>
      </MainCard>
    )
  }
}

export default App
