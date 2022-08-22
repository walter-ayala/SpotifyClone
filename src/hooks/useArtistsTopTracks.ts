import { useState, useEffect } from 'react'
import { getArtistsTopTracks } from 'services'

const useArtistsTopTracks = (artist: string) => {
  const [tracks, setTracks] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getArtistsTopTracks(artist)
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { tracks, loading }
}

export default useArtistsTopTracks
