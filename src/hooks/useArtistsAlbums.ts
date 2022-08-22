import { useState, useEffect } from 'react'
import { getArtistsAlbums, getArtistsTopTracks } from 'services'

const useArtistsAlbums = (artist: string) => {
  const [albums, setAlbums] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getArtistsAlbums(artist)
      .then(response => {
        setAlbums(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { albums, loading }
}

export default useArtistsAlbums
