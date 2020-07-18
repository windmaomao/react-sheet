import React, { useState, useEffect } from "react"
import { Text } from "theme-ui"
import { AiOutlineFileText } from "react-icons/ai"
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

  const urlParts = url.split('/')

  return (
    <div>
      <Text sx={{ fontSize: 1 }} p={1}>
        <AiOutlineFileText />&nbsp;{urlParts.slice(-1)[0]}
      </Text>

      <pre>
        {content}
      </pre>
      {loading && 'loading ...'}
    </div>
  )
}
