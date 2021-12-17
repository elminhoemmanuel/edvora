import React, { useState, useEffect } from 'react'
import { Box, Text, Divider, Flex, Spacer, Button, SimpleGrid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { AiOutlineRight } from "react-icons/ai"
import ProductCard from './ProductCard'

const ProductsGroup = ({ title, items }) => {

    const colSpan = useBreakpointValue({ base: 4, md: 1 })
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [grp, setGrp] = useState([]);

   
    return (
        <Box mb={5}>
            <Text pb={2}>{title}</Text>
            <Divider color="brand.border" mb={4} />

            <Flex alignItems="center">
                <Box w="90%">
                    <SimpleGrid columns={4} columnGap={2} rowGap={2}  bg="brand.100" p={4} >
                            {
                                items.filter(item => item.product_name === title).map(each => (
                                    <ProductCard key={each} data={each} />
                                ))
                            }

                    </SimpleGrid>
                </Box>
                <Spacer />
                <Box w="3%">
                    <Button colorScheme="brand" bg="transparent" >
                        <AiOutlineRight style={{ fontSize: "40px" }} />
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProductsGroup
