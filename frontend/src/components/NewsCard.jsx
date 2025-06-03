import AudioPlayer from './AudioPlayer'

const NewsCard = ({ newsItem, onPlayAudio, isPlaying }) => {
  return (
    <div className="news-card">
      <h3 className="news-title">{newsItem.title}</h3>
      <p className="news-summary">{newsItem.summary}</p>
      <AudioPlayer 
        onPlay={() => onPlayAudio(newsItem)}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default NewsCard