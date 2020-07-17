import React, { useState } from "react"
import { css } from "theme-ui"
import Repos from './Repos'
import Contents from './Contents'
import File from './File'

export default () => {
  const [repo, setRepo] = useState('')
  const [url, setUrl] = useState('')

  return (
    <>
      <Repos onRepo={setRepo} />
      <div
        css={css({
          display: 'flex',
        })}
      >
        <div
          css={css({
            flex: '0 0 10rem',
          })}
        >
          <Contents repo={repo} onUrl={setUrl} />
        </div>
        <File url={url} />
      </div>
    </>
  )
}
