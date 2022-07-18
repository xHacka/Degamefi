import { Heading, Container, Stack } from "@chakra-ui/react";
import React from "react";
import SpeakerSlider from "../sliders/SpeakerSlider";
import speakers from "../../data/speakers.data.json";

const Title = () => (
  <Heading as="h1" fontSize="2em" textDecoration="underline" display="block">
    SPEAKERS
  </Heading>
);

const Speakers = () => {
  return (
    <Container as={Stack} id="speakers" maxW={"8xl"} color="#FFF">
      <Title />
      <SpeakerSlider speakers={speakers} />
    </Container>
  );
};

export default Speakers;
