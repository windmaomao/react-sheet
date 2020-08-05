import React from "react"
import { Flex, Avatar, Heading, Box } from "theme-ui"

export default ({ title, logo, desc }) => {
  return (
    <Box p={2}>
      <Flex
        flexDirection="Column"
        sx={{ alignItems: 'center' }}
      >
        <Avatar src={logo} />
        <Heading>{title}</Heading>
      </Flex>
      <Box p={1}>
        {desc}
      </Box>
    </Box>
  )
}
