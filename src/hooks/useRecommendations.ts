import { useState, useEffect } from 'react'
import { getRecommendations } from 'services'

const useRecommendations = () => {
  const [tracks, setTracks] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getRecommendations()
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { tracks, loading }
}

export default useRecommendations
