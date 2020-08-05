import React, { useState, useEffect } from "react"
import { Flex, Avatar } from "theme-ui"
// import Subscriptions from './Subscriptions'
// https://www.googleapis.com/youtube/v3
export default ({ api }) => {
  const [subs, setSubs] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await api.fetch(
        `/subscriptions?mine=true&part=snippet`
      )
      if (res) setSubs(res.items)
      console.log(res)
    }
    fetch()
  }, [setSubs, api])

  return (
    <Flex>
      {subs.map(sub => (
        <Avatar
          key={sub.id}
          title={sub.snippet.name}
          src={sub.snippet.thumbnails.default.url}
        />
      ))}
    </Flex>
  )
}
