import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// const bg = useColorModeValue('gray.50', 'blackAlpha.800')


const theme = extendTheme({
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
  config
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider resetCSS='true' theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
