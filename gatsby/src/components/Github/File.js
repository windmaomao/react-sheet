import React, { useState, useEffect } from "react"
// import mdx from '@mdx-js/mdx'
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
        // const jsx = await mdx(res, {skipExport: true})
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
