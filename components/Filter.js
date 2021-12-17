import React from 'react'
import { Box, Text, Divider, Select } from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md"

const Filter = ({ products }) => {
    return (
        <Box
            bg="brand.100"
            w={{ base: "100%", md: "20%", }}
            p={5}
            borderRadius="15px"
            h="40vh"
        >
            <Text pb={2}>Filters</Text>
            <Divider color="brand.border" mb={4} />

            <Select mb={3} placeholder="Products" variant='filled' bg="brand.50" icon={<MdArrowDropDown />} >
                {
                    products.map(item =>(
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </Select>

            <Select mb={3} placeholder="States" variant='filled' bg="brand.50" icon={<MdArrowDropDown />} >
                <option bg="black" value='option1'>Option 1</option>
                <option bg="black" value='option2'>Option 2</option>
                <option bg="black" value='option3'>Option 3</option>
            </Select>

            <Select mb={3} placeholder="City" variant='filled' bg="brand.50" icon={<MdArrowDropDown />} >
                <option bg="black" value='option1'>Option 1</option>
                <option bg="black" value='option2'>Option 2</option>
                <option bg="black" value='option3'>Option 3</option>
            </Select>

        </Box>
    )
}

export default Filter
