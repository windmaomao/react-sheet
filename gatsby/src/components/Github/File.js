import React, { useState, useEffect } from "react"
import { Text, Container } from "theme-ui"
import { AiOutlineFileText } from "react-icons/ai"
import ReactMarkdown from 'react-markdown'
import { ghAuth } from '../../utils'

const FileRender = ({ url, source }) => {
  const urlParts = url.split('.')
  const ext = urlParts.length ? urlParts.slice(-1)[0] : ''

  switch (ext) {
    case 'png':
    case 'jpg':
      return <img src={url} alt="pic" />
    case 'md':
      return <ReactMarkdown source={source} />
    default:
      return <pre>{source}</pre>
  }
}

export default ({ url }) => {
  if (!url) return null

  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await ghAuth.view(url)
        setContent({
          url: url,
          source: res
        })
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
      {content && (
        <Container p={3}>
          <FileRender {...content} />
        </Container>
      )}
      {loading && 'loading ...'}
    </div>
  )
}
