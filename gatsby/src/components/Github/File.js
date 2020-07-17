import React, { useState, useEffect } from "react"
import { ghAuth } from '../../utils'

export default ({ url }) => {
  if (!url) return null

  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await ghAuth.view(url)
        setContent(res)
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setContent, url])

  return (
    <div>
      <pre>
        {content}
      </pre>
      {loading && 'loading ...'}
    </div>
  )
}
