import { Container, Box, Text, Stack, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const smtp = '/api/smtp'
        const data = {
            name: name,
            email: email,
            subject: 'Degamefi Support',
            phone: phone,
            msg: msg
        }

        await fetch(smtp, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        setName('')
        setEmail('')
        setPhone('')
        setMsg('')
    }

    return (
        <Container as={Stack} maxW={"8xl"} color="#FFF" gridGap="3em" pb="20em" id='contactus'>
            <Text fontSize="2em" textDecoration="underline">
                CONTACT US
            </Text>

            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gridTemplateColumns={["1fr", "1fr 1fr"]}
                    gridGap="4em"
                    background="#323232"
                    border="2px solid rgba(255, 255, 255, 0.3)"
                    boxShadow="0px 0px 126px 37px rgba(0, 159, 150, 0.25)"
                    borderRadius="1em"
                    padding="3em 2em"
                >
                    <Box display="flex" flexDirection="column">
                        <FormControl pb="1.5em" isRequired >
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input id="name" type="name" onChange={(e) => (setName(e.target.value))} value={name}/>
                        </FormControl>
                        <FormControl pb="1.5em" isRequired>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" onChange={(e) => (setEmail(e.target.value))} value={email}/>
                        </FormControl>
                        <FormControl pb="1.5em">
                            <FormLabel htmlFor="phone">Phone</FormLabel>
                            <Input id="phone" type="phone" onChange={(e) => (setPhone(e.target.value))} value={phone}/>
                        </FormControl>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <FormControl flex="1" isRequired >
                            <FormLabel htmlFor="message">message</FormLabel>
                            <Textarea id="message" height="80%" onChange={(e) => (setMsg(e.target.value))} value={msg}/>
                        </FormControl>
                        <Button background="#344F5B" borderRadius="0.5em" type='submit'>
                            SEND MESSAGE
                        </Button>
                    </Box>
                </Box>
            </form>
        </Container>
    )
}

export default ContactUs;