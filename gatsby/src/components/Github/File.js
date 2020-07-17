import React, { useState, useEffect } from "react"

export default ({ url }) => {
  if (!url) return null

  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchFile() {
      try {
        setLoading(true)
        const res = await fetch(url)
        console.log(res)
        // setContents(res)
      }
      finally {
        setLoading(false)
      }
    }
    fetchFile()
  }, [setContent, url])

  return (
    <div>
      {content}
      {loading && 'loading ...'}
    </div>
  )
}
