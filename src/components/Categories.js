import React from 'react'
import {Heading, Box, Center} from '@chakra-ui/react';

function Categories({categories, selectedCategory, selecCategory}) {
  return (
    <Box width='400px' pr={10}>
        <Heading fontSize='3xl' color='black' as='h3' mb={3}>Product Categories</Heading>
        <Box borderRadius="md" color='black' border='1px' borderColor='gray.300'>
            {
                categories.map((category, index) => (<Box bg={selecCategory.id === category.id ? 'teal.500' : ''} color={selecCategory.id === category.id ? 'white' : 'black'} cursor='pointer' onClick={() => selectedCategory(category)} fontWeight={600} py={2} key={category.id} borderBottom='1px' borderColor='gray.300'><Center>{category.categoryName}</Center></Box>))
            }
        </Box>
    </Box> 
  )
}

export default Categories