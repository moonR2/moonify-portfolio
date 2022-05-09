import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} Andrés Orozco. Website build with Nextjs - Chakra and Emotion.
    </Box>
  )
}

export default Footer