import React, { useState } from "react"
import { css } from "theme-ui"
import Repos from './Repos'
import Contents from './Contents'
import File from './File'

export default () => {
  const [repo, setRepo] = useState('')
  const [url, setUrl] = useState('')

  return (
    <div
      css={css({
        display: 'flex',
      })}
    >
      <Repos onRepo={setRepo} />
      <Contents repo={repo} onUrl={setUrl} />
      <File url={url} />
    </div>
  )
}
