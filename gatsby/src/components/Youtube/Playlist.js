import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Embed } from "theme-ui"

export default ({ api, playlistId }) => {
  if (!playlistId) return null

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await api.fetch(
        `/playlistItems?part=snippet&playlistId=${playlistId}`
      )
      if (res) setVideos(res.items)
    }
    fetch()
  }, [setVideos, api, playlistId])

  return (
    <Box p={2}>
      {videos.map(v => (
        <Box
          key={v.id}
          sx={{ marginBottom: '2rem' }}
        >
          <Heading as='h5'>{v.snippet.publishedAt}</Heading>
          <Text>{v.snippet.title}</Text>
          <Embed src={`https://www.youtube.com/embed/${v.snippet.resourceId.videoId}`} />
        </Box>
      ))}
    </Box>
  )
}
