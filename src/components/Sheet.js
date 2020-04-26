import React from 'react'
import Plus from './Plus'
import SheetStyle from './SheetStyle'

const Sheet = () => {
  return (
    <SheetStyle>
      <Plus
        first={2}
        second={3}
        value=""
      />
      <Plus
        first="1"
        second="1"
        value=""
      />
      <Plus
        first="8"
        second="8"
        value=""
      />
      <Plus
        first="3"
        second="5"
        value=""
      />
      <Plus
        first="8"
        second="3"
        value=""
      />
      <Plus
        first="5"
        second="2"
        value=""
      />
      <Plus
        first="33"
        second="12"
        value=""
      />
      <Plus
        first="4"
        second="3"
        value=""
      />
      <Plus
        first="5"
        second="9"
        value=""
      />
    </SheetStyle>
  )
}

export default Sheet
