import { Play, Pause } from 'lucide-react'

const AudioPlayer = ({ onPlay, isPlaying }) => {
  return (
    <div className="audio-controls">
      <button 
        className="play-button"
        onClick={onPlay}
        disabled={isPlaying}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      {isPlaying && <span>Playing...</span>}
    </div>
  )
}

export default AudioPlayer