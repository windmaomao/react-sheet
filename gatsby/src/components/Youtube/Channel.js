import React, { useState, useEffect } from "react"
import { Flex, Avatar, Heading, Box, Text } from "theme-ui"
import Playlist from './Playlist'

export default ({
  title, logo, desc,
  api, resourceId
}) => {
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    async function fetch() {
      const res = await api.fetch(
        `/channels?part=contentDetails&id=${resourceId}`
      )
      if (res && res.items) setChannel(res.items[0])
    }
    fetch()
  }, [setChannel, api, resourceId])

  return (
    <Flex
      flexDirection="row"
      sx={{
        backgroundColor: 'floralwhite',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          width: '200px',
          fontSize: '0.9rem',
          padding: '1rem'
        }}
      >
        <Avatar src={logo} />
        <Heading as='h3'>{title}</Heading>
        <Text
          sx={{
            padding: '1rem 0',
            fontSize: '0.8rem'
          }}
        >
          {desc}
        </Text>
      </Box>
      {channel && (
        <Box
          sx={{
            flex: '0 0 500px',
          }}
        >
          <Playlist
            api={api}
            playlistId={channel.contentDetails.relatedPlaylists.uploads}
          />
      </Box>
      )}
    </Flex>
  )
}
