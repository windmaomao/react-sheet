import React, { useState } from "react"
import { css } from "theme-ui"
import Repos from './Repos'
import Contents from './Contents'

export default () => {
  const [repo, setRepo] = useState('')

  return (
    <div
      css={css({
        display: 'flex',
      })}
    >
      <Repos onRepo={setRepo} />
      <Contents repo={repo} />
    </div>
  )
}
