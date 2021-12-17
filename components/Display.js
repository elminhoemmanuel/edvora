import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import ProductsGroup from './ProductsGroup'

const Display = ({ items, products }) => {
    return (
        <Box
            w={{ base: "100%", md: "80%", }}
            px={[0, 6]}
        >
            <Text fontSize="2xl" pb={2}>Edvora</Text>

            <Box>
                <Text color="gray.300" pb={2}>Products</Text>
                
                {
                    products.map(item =>(
                        <ProductsGroup key={item} title={item} items={items} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Display
