// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, handleEmoji} = props
  const {emojiUrl, emojiName, id} = emojis

  const onClickingEmoji = () => {
    handleEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" onClick={onClickingEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
