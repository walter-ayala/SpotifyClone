import { useState, useEffect } from 'react'
import { getTopTracks } from 'services'

const useTopTracks = () => {
  const [tracks, setTracks] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getTopTracks()
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { tracks, loading }
}

export default useTopTracks
