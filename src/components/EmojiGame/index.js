/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojis: [], score: 0, topScore: 0, gameStatus: 'playing'}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiclick = id => {
    const {clickedEmojis, score, topScore} = this.state
    const isClickedEmoji = clickedEmojis.includes(id)

    if (isClickedEmoji) {
      this.setState({gameStatus: 'lose'})
    } else {
      const newclickedEmojis = [...clickedEmojis, id]
      const newscore = score + 1

      if (newscore === this.props.emojisList.length) {
        this.setState({
          gameStatus: 'win',
          score: newscore,
          topScore: Math.max(newscore, topScore),
        })
      } else {
        this.setState({
          score: newscore,
          clickedEmojis: newclickedEmojis,
          topScore: Math.max(newscore, topScore),
        })
      }
    }
  }

  resetGame = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      gameStatus: 'playing',
    })
  }

  renderGameView = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <>
        <div className="game-container">
          <ul className="emojis-list-container">
            {shuffledList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojis={eachItem}
                handleEmoji={this.handleEmojiclick}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {score, topScore, gameStatus} = this.state
    return (
      <>
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        {gameStatus === 'playing' ? (
          this.renderGameView()
        ) : (
          <WinOrLoseCard
            gameStatus={gameStatus}
            score={score}
            resetGame={this.resetGame}
          />
        )}
      </>
    )
  }
}

export default EmojiGame
