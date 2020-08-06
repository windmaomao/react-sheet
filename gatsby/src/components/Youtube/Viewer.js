import React, { useState } from "react"
import { Divider } from "theme-ui"
import Subscriptions from './Subscriptions'
import Channel from './Channel'

export default ({ api }) => {
  const [channel, setChannel] = useState(null)
  const onSelect = item => {
    console.log(item)
    setChannel(item.snippet)
  }

  return (
    <div>
      <Subscriptions
        api={api}
        onSelect={onSelect}
      />
      <Divider />
      {channel && (
        <Channel
          title={channel.title}
          logo={channel.thumbnails.high.url}
          desc={channel.description}
          api={api}
          resourceId={channel.resourceId.channelId}
        />
      )}
    </div>
  )
}
