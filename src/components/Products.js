import React from 'react'
import { Button, Center, Box, Tag } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

function Products({products, selecCategory, addBasket}) {
    const selectedProducts = products.filter(product => product.categoryId === selecCategory.id);
  return (
    <Box w='full'>
        <Tag  variant='solid' colorScheme='teal'>
        Product Category: {selecCategory.categoryName}
        </Tag>
        <TableContainer>
            <Table variant='striped' color='black' colorScheme='orange'>
            <Thead>
                <Tr>
                <Th>#</Th>
                <Th>Product Name</Th>
                <Th isNumeric>Price</Th>
                <Th>Stock</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    selectedProducts.map((selectedProduct, index) => (
                        <Tr key={index}>
                        <Td><Center>{selectedProduct.id}</Center></Td>
                        <Td><Center>{selectedProduct.productName}</Center></Td>
                        <Td isNumeric><Center>{selectedProduct.unitPrice}</Center></Td>
                        <Td><Center>{selectedProduct.unitsInStock}</Center></Td>
                        <Td>
                            <Button onClick={() => selectedProduct.unitsInStock !== 0 ? addBasket(selectedProduct) : alert('Lütfen stokta yer alan bir ürün seçiniz.')} colorScheme='green'>Sepete Ekle</Button>
                        </Td>
                        </Tr>
                        ))
                }
            </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default Products