import React, { useState, useEffect } from "react"
import { Flex, Avatar } from "theme-ui"

export default ({ api, onSelect }) => {
  const [subs, setSubs] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await api.fetch(
        `/subscriptions?mine=true&part=snippet&maxResults=50`
      )
      if (res) setSubs(res.items)
    }
    fetch()
  }, [setSubs, api])

  const onClick = item => () => { onSelect(item) }

  return (
    <Flex sx={{
      flexWrap: "wrap"
    }}>
      {subs.map(sub => (
        <Avatar
          key={sub.id}
          title={sub.snippet.title}
          src={sub.snippet.thumbnails.default.url}
          onClick={onClick(sub)}
          sx={{ cursor: 'pointer' }}
        />
      ))}
    </Flex>
  )
}
