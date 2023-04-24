import React from 'react'
import Navbar from '../Components/Navbar'
import { Box,Center, Flex } from '@chakra-ui/react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section6 from './Section6'
import Section4 from './Section4'
import Section5 from './Section5'
const Landingpage = () => {
  return ( 
    <Box >
    <Box>
      <Section1/> 
      </Box>
      <Box>
      <Section2/> 
      </Box>
      <Box>
      <Section3/>
      </Box>
      <Box>
      <Section4/>
      </Box>
      <Box >
      <Section5/>
      </Box>
      <Box>
      <Section6/>
      </Box>  
    </Box> 
  )
}

export default Landingpage
