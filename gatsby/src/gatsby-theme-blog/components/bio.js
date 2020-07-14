import React from 'react'
import { css } from "theme-ui"
import { Auth } from '../../components'

export default () => (
  <div
    css={css({
      fontStyle: 'italic',
    })}
  >
    with strategy, design, system and more ... &nbsp;
    <Auth />
  </div>
)
