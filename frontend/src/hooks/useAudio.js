import { useState } from 'react'
import { voiceAPI } from '../services/api'

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPlaying, setCurrentPlaying] = useState(null)
  const [currentAudio, setCurrentAudio] = useState(null)

  const playAudio = async (text, voiceId, newsId) => {
    try {
      // Stop current audio if playing
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }

      setIsPlaying(true)
      setCurrentPlaying(newsId)

      const response = await voiceAPI.generateVoice({ text, voiceId })
      
      // Create audio element and play
      const audio = new Audio(response.data.audioUrl)
      setCurrentAudio(audio)
      
      audio.onended = () => {
        setIsPlaying(false)
        setCurrentPlaying(null)
        setCurrentAudio(null)
      }
      
      audio.onerror = () => {
        setIsPlaying(false)
        setCurrentPlaying(null)
        setCurrentAudio(null)
        console.error('Audio playback failed')
      }
      
      await audio.play()
    } catch (err) {
      setIsPlaying(false)
      setCurrentPlaying(null)
      console.error('Error generating/playing audio:', err)
    }
  }

  return { playAudio, isPlaying, currentPlaying }
}