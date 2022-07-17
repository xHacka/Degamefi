import { Container, Box, Text, Stack, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const ticketData = [
    {
        id: 1,
        type: 'standard',
        limit: 'one day ticket',
        date: '13 march',
        price: '$'
    },
    {
        id: 2,
        type: 'standard',
        limit: 'one day ticket',
        date: '13 march',
        price: '$'
    }
]

const Ticket = ({ type, limit, date, price }) => (
    <GridItem
        background="linear-gradient(212.28deg, #BBEDAD 1.89%, #32D99F 22.23%, #3194BF 64.79%, #3769EA 96.14%)"
        border="3px solid rgba(0, 0, 0, 0.3)"
        borderRadius="1.5em"
        p="2em"
        textAlign="center"
        w='60%'
    >
        <Text fontSize="1.5em" color="#3F3F3F" textDecoration="underline" textTransform='uppercase'>
            {type}
        </Text>
        <Text fontSize="1.5em" color="#FFF" fontFamily="Nova Square" textTransform='capitalize'>
            {limit}
        </Text>
        <Text fontSize="1.5em" color="#FFF" fontFamily="Nova Square" textTransform='capitalize'>
            {date}
        </Text>
        <Text
            fontSize="5em"
            color="#3F3F3F"
            fontFamily="Nova Square"
            py="1em"
        >
            {price}
        </Text>
        <Button
            background="#3F3F3F"
            border="1px solid #FFFFFF"
            borderRadius="1em"
            className="btn-hover"
        >
            BUY TICKET
        </Button>
    </GridItem>
)

const Tickets = () => {
    return (
        <Container 
            maxW={"8xl"}
            color="#FFF" 
            display='grid'
            gap='2rem'
            py="3em" 
            id='tickets'>
            <Text fontSize="2em" textAlign="center" textDecoration="underline">
                TICKETS
            </Text>
            <Box
                display="grid"
                gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)"]}
                gridGap={["2rem", "2rem", 0]}
                justifyItems='center'
            >
                {ticketData.map((ticket) => ( 
                    <Ticket
                        key={`${ticket.id}-${Math.floor(Math.random() * 1000)}`} 
                        type={ticket.type}
                        limit={ticket.limit}
                        date={ticket.date}
                        price={ticket.price} /> 
                ))}
            </Box>
        </Container> 
    )
}

export default Tickets;
