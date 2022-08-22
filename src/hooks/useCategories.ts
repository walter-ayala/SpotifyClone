import { useState, useEffect } from 'react'
import { getCategories } from 'services'

const useCategories = () => {
  const [categories, setCategories] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)

    getCategories()
      .then(response => {
        setCategories(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { categories, loading }
}

export default useCategories
