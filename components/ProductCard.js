import React from 'react'
import { SimpleGrid, GridItem, Box, Image, Text, HStack, Heading,useBreakpointValue } from "@chakra-ui/react"
import moment from "moment"

const ProductCard = ({ data }) => {
    const colSpan = useBreakpointValue({ base: 4, md: 1 })
    return (
        <GridItem colSpan={colSpan} bg="brand.50" borderRadius="4.5px" p={2} mb={5}>
            <SimpleGrid columns={2} columnGap={2} w="full" mb={5}>
                <GridItem colSpan={1}>
                    <Image
                        borderRadius='2px'
                        boxSize='80px'
                        src={data.immage}
                        alt='product Image'
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontSize='xs' pb={1}>{data.product_name}</Text>
                    <Text color="gray.300" fontSize='xs' pb={3}>{data.brand_name}</Text>

                    <Text fontSize='xs' pb={1}>$ {data.price}</Text>


                </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={2} columnGap={1} w="full" mb={5}>
                <GridItem colSpan={1}>
                    <Text fontSize='xs' color="gray.300">{data.address.state}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text fontSize='xs' color="gray.300">Date : {moment(data.date).format("DD:MM:YYYY")}</Text>
                </GridItem>
            </SimpleGrid>

            <Text fontSize='xs' color="gray.300">{data.description}</Text>
        </GridItem>
    )
}

export default ProductCard
