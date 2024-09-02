// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props
  const isPlaying = gameStatus === 'playing'
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isPlaying && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
