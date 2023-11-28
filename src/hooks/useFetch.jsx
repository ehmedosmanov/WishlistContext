import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const res = await axios.get(url)
      const result = res.data
      setData(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(true)
    }
  }
  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
