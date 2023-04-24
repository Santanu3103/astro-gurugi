import React from 'react'
import Navbar from '../Components/Navbar'
import { Box,Center, Flex } from '@chakra-ui/react'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section5 from '../Components/Section5'
import Section4 from '../Components/Section4'
const Landingpage = () => {
  return ( 
    <Box >
      <Section1/> 
      <Section2/> 
      <Section3/>
      <Section4/>
      <Section5/>  
    </Box> 
  )
}

export default Landingpage
