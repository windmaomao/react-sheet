import React from "react"
import { Flex, Avatar, Heading, Box } from "theme-ui"

export default ({ title, logo, desc }) => {
  return (
    <Box p={2}>
      <Flex
        flexDirection="Column"
        sx={{ alignItems: 'center' }}
      >
        <Avatar src={logo} />&nbsp;
        <Heading>{title}</Heading>
      </Flex>
      <Box
        sx={{
          padding: '1rem 0',
          fontSize: '0.9rem',
          lineHeight: '1.2rem',
        }}
      >
        {desc}
      </Box>
    </Box>
  )
}
