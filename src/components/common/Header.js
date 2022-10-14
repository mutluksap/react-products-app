
import { Box, Heading, Flex } from '@chakra-ui/react'
import {Menu ,MenuButton, MenuList, MenuItem, Button, Tag} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


function Header({emptyBasket, basket}) {
  return (
    <Box bg='gray.800' color='black' w='full' p='2' pr='40'>
        <Flex alignItems='center' justifyContent='space-between'>
            <Heading color='white' as='h6'>Products App</Heading>
                <Menu >
            {({ isOpen }) => (
                <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    {isOpen ? 'My Basket' : 'My Basket'}
                </MenuButton>
            {
                basket.length !== 0 ?

                <MenuList>
                    {
                        basket.map((basketItem, index) => (<MenuItem key={index}>{basketItem.productName}<Tag variant='solid' colorScheme='teal'>{basketItem.productCount}</Tag></MenuItem>))
                    }
                    <MenuItem _hover={{ bg: "red.800", color: " white" }} bg='red.500' color='white' onClick={() => emptyBasket()}>Sepeti Boşalt</MenuItem>
                </MenuList>
                :
                ''
            }
                </>
            )}
</Menu>
            
        </Flex>
    </Box>
  )
}

export default Header