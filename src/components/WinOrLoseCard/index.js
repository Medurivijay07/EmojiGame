// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, score, resetGame} = props
  const isWon = gameStatus === 'win'

  const onClickingPlayAgain = () => {
    resetGame()
  }
  return (
    <div className="winlose-container">
      <div className="win-lose-card">
        <div>
          <h1 className="winorlose">{isWon ? 'You Won' : 'You Lose'}</h1>
          <p className="best-score">{isWon ? 'Best Score' : 'Score'}</p>
          <p className="score-result">{score}/12</p>
          <button
            type="button"
            onClick={onClickingPlayAgain}
            className="play-again"
          >
            Play Again
          </button>
        </div>
        <img
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
