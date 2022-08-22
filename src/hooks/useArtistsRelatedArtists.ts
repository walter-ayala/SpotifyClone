import { useState, useEffect } from 'react'
import { getArtistsRelatedArtists } from 'services'

const useArtistsRelatedArtists = (artist: string) => {
  const [artists, setArtists] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getArtistsRelatedArtists(artist)
      .then(response => {
        setArtists(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { artists, loading }
}

export default useArtistsRelatedArtists
