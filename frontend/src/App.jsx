import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NewsCard from './components/NewsCard'
import VoiceSelector from './components/VoiceSelector'
import { useNews } from './hooks/useNews'
import { useAudio } from './hooks/useAudio'

const App = () => {
  const [selectedVoice, setSelectedVoice] = useState('celebrity-1')
  const { news, loading, error, fetchNews } = useNews()
  const { playAudio, isPlaying, currentPlaying } = useAudio()

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const handlePlayAudio = async (newsItem) => {
    await playAudio(newsItem.summary, selectedVoice, newsItem.id)
  }

  return (
    <div className="container">
      <Header />
      <VoiceSelector 
        selectedVoice={selectedVoice}
        onVoiceChange={setSelectedVoice}
      />
      
      {loading && <div className="loading">Loading latest news...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="news-grid">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            newsItem={item}
            onPlayAudio={handlePlayAudio}
            isPlaying={isPlaying && currentPlaying === item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App