import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Container, Flex, Spacer, useBreakpointValue, Box } from "@chakra-ui/react"
import Filter from '../components/Filter';
import Display from '../components/Display';
import axios from "axios";

export default function Home() {

    const colSpanLeft = useBreakpointValue({ base: 3, md: 1 });
    const colSpanRight = useBreakpointValue({ base: 3, md: 2 });

    const [flag, setFlag] = useState(true)
    const [items, setItems] = useState(null)
    const [productsTypes, setProductsTypes] = useState([])

    useEffect(() => {

        axios.get(`https://assessment-edvora.herokuapp.com/`)
            .then((response) => {
                // console.log("api",response);
                setItems(response.data)
                if (flag) {
                    setFlag(!flag)
                } else {
                    let types = []
                    types.push(items[0].product_name)
                    for (let i = 0; i < items.length; i++) {
                        if (!types.includes(items[i].product_name) && items[i].product_name !== items[i - 1].product_name) {
                            types.push(items[i].product_name)
                        }
                    }

                    setProductsTypes(types);
                }


            }, (error) => {
                console.log(error)
            });
    }, [flag])

    return (
        <>
            <Head>
                <title>Edvora</title>
                <meta name="keywords" content="Edvora | Homepage" />
            </Head>


            <Container
                bg="brand.50"
                color="white"
                h="100%"
                maxW={{ base: "100%", "2xl": "container.xl" }}
                p={8}
            >
                <Flex w="full" direction={{ base: "column", md: "row" }}>
                    <Filter products={productsTypes} />
                    <Display items={items} products={productsTypes} />
                </Flex>
            </Container>
        </>
    )
}
