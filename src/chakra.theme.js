import { extendTheme } from "@chakra-ui/react"
import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'


const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)
    const baseStyle = definePartsStyle({
        container: {
            // ...
          },
          thumb: {
            bg: 'white',
          },
          track: {
            bg: 'gray.100',
            _checked: {
              bg: 'purple.700',
            },
          },
    })
  const switchTheme = defineMultiStyleConfig({baseStyle})

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }


export const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.50',
          color: 'blackAlpha.800',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
    components: {Switch: switchTheme},
    config
  })