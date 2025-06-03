
const voices = [
  { id: 'celebrity-1', name: 'Morgan Freeman' },
  { id: 'celebrity-2', name: 'David Attenborough' },
  { id: 'celebrity-3', name: 'Scarlett Johansson' },
  { id: 'celebrity-4', name: 'Samuel L. Jackson' },
  { id: 'celebrity-5', name: 'Emma Stone' }
]

const VoiceSelector = ({ selectedVoice, onVoiceChange }) => {
  return (
    <div className="voice-selector">
      <select 
        value={selectedVoice} 
        onChange={(e) => onVoiceChange(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.id} value={voice.id}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default VoiceSelector