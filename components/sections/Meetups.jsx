import { Container, Box, Text, Image, Stack, Heading } from '@chakra-ui/react'
import React from 'react'
import MeetupsSlider from '../sliders/MeetupsSlider';

const Meetups = () => {
    return (
        <Container id="meetups" as={Stack} maxW={"8xl"} color="#FFF" gridGap="3em" my='5rem'>
            <Heading as='h1'>MEETUPS</Heading>
            <MeetupsSlider />
        </Container>
    )
}

export default Meetups;
 