import React from 'react'
import Products from './Products'
import Categories from './Categories'
import { Flex, Box } from '@chakra-ui/react'

function Main({categories, selectedCategory, products, selecCategory, addBasket}) {
  return (
    <Box w='full'py='10' px='4'>
        <Flex justifyContent='space-between'>
            <Categories selecCategory={selecCategory} selectedCategory={selectedCategory} categories={categories}/>
            <Products addBasket={addBasket} products={products} selecCategory={selecCategory}/>
        </Flex>
    </Box>
  )
}

export default Main