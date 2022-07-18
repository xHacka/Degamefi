import { Container, Box, Text, Stack, Heading } from '@chakra-ui/react'
import React from 'react'

const Schedule = () => {
    return (
        <Container
            as={Stack}
            maxW={"8xl"}
            textAlign="center"
            color="#FFF"
            py="6em"
        >
            <Heading as='h1' textTransform="uppercase" className='schedule-title'>
                degamefi annual conference 2022
            </Heading>
            <Heading as='h2' textTransform="uppercase" className='schedule-subtitle'>
                September 30 - October 1
            </Heading>
            <Text as='h2' textTransform="uppercase" pb="2em" className='schedule-subtitle'>
                Tbilisi, Georgia</Text>
            <Heading as='h1' fontSize="2em" textDecoration="underline">
                AGENDA
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="100fr 1fr 100fr"
                gridGap="4em"
                background="#323232"
                border="2px solid rgba(255, 255, 255, 0.3)"
                boxShadow="0px 0px 126px 37px rgba(0, 159, 150, 0.25)"
                borderRadius="1em"
                padding="3em 2em"
            >
                <Box>
                    <Text textDecoration="underline" fontSize="1.5em">
                        DAY 1
                    </Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        fontFamily="Nova Square"
                        textAlign="center"
                        fontSize="1.5em"
                    >
                        {[...Array(10).keys()].map((event, key) => (
                            <Text key={key}>
                                10:00
                                &#11044;
                                -----
                                </Text>
                        ))}
                    </Box>
                </Box>
                <Box bg="#FFF"></Box>
                <Box>
                    <Text textDecoration="underline" fontSize="1.5em">
                        DAY 2
                    </Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        fontFamily="Nova Square"
                        textAlign="center"
                        fontSize="1.5em"
                    >
                        {[...Array(10).keys()].map((event, key) => (
                            <Text key={key}>
                                11:00
                                &#11044;
                                -----
                            </Text>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Schedule;

