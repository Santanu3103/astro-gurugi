import * as React from 'react'
import Landingpage from './Pages/Landingpage'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Landingpage />
    </ChakraProvider>
  )
}