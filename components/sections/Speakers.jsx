import { Heading, Container, Stack } from "@chakra-ui/react";
import React from "react";
import SpeakerSlider from "../Slider/SpeakerSlider";

const speakers = [
    {
        id: 1,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 2,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia", 
    },
    {
        id: 3,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 4,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 5,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 6,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 7,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
    {
        id: 8,
        img: "./images/speaker.png",
        fname: "First Name",
        lname: "Last Name",
        regalia: "Regalia",
    },
];

const Title = () => (
    <Heading as="h1" fontSize="2em" textDecoration="underline" display="block">
        SPEAKERS
    </Heading>
)

const Speakers = () => {
    return (
        <Container as={Stack} id='speakers' maxW={"8xl"} color="#FFF">
            <Title />
            <SpeakerSlider speakers={speakers} />
        </Container>
    );
};

export default Speakers;