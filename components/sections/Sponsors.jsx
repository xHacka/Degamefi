import { Container, Box, Text, Stack, Button } from '@chakra-ui/react'
import React from 'react'

const Sponsors = () => {
    return (
        <Container
            id="sponsors"
            as={Stack}
            maxW={"8xl"}
            color="#FFF"
            gridGap="3em"
            mb="6em"
        >
            <Text fontSize="2em" textDecoration="underline">
                SPONSORS
            </Text>
            <Box
                display="grid"
                gridTemplateColumns={["repeat(4,1fr)"]}
                gridGap="2em"
                py="5em"
            >
                {new Array(12).fill(undefined).map((item, key) => (
                    <Box
                        key={key}
                        justifySelf={key > 3 && key < 8 ? "flex-start" : "flex-end"}
                        borderRadius="100%"
                        bg="#FFF"
                        height="12em"
                        width="12em"
                    ></Box>
                ))}
            </Box>
            <Box textAlign="center">
                <Button
                    background="rgba(235, 235, 235, 0.28)"
                    backdropFilter="blur(1.5em)"
                    borderRadius="0.75em"
                    p="1.5em"
                    className="btn-hover"
                >
                    GET YOUR TICKET!
                </Button>
            </Box>
        </Container>
    )
}

export default Sponsors