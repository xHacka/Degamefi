import {
  Container,
  Button,
  Image,
  Grid,
  GridItem,
  Heading,
  Link,
} from "@chakra-ui/react";
import { scaleMovementAnimation, spinMovementAnimation } from "../GlobalStyles";
import React from "react";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <Container minH="50vh" maxW="8xl" id="landing" >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap="3rem"
        justifyContent="center"
        alignItems="center"
        mt={["0", "0", "6rem"]}
      >
        <GridItem color={"#FFF"} m="1rem" position="relative">
          <Image
            position="absolute"
            left="0"
            top={["-10%", "-50%", "-20%", "-40%", "10%", "-50%"]}
            zIndex={-1}
            animation={spinMovementAnimation}
            transformOrigin="center"
            src="./images/bla.png"
          />
          <Heading as="h1" fontSize={"clamp(1rem, 2.5rem, 2.5rem)"}>
            <Typewriter
              options={{ cursor: "" }}
              onInit={(tw) => {
                tw.pauseFor(100).typeString("UPCOMING EVENTS...").start();
              }}
            />
          </Heading>
          <Heading
            as="h2"
            fontSize={"clamp(.75rem, 1.6rem, 1.6rem)"}
            fontFamily="Nova Square"
            py="1rem"
          >
            <Typewriter
              options={{ cursor: "" }}
              onInit={(tw) => {
                tw.pauseFor(2800)
                  .typeString("DEGAMEFI Annual Conference")
                  .start();
              }}
            />
          </Heading>

          <Heading
            as="h3"
            fontSize={"clamp(.7rem, 1.25rem, 1.25rem)"}
            fontFamily="Nova Square"
            py="1rem"
          >
            <Typewriter
              options={{ cursor: "" }}
              onInit={(tw) => {
                tw.pauseFor(6000)
                  .typeString("September 30 - October 1")
                  .start();
              }}
            />
          </Heading>

          <Heading
            as="h3"
            fontSize={"clamp(.7rem, 1.25rem, 1.25rem)"}
            fontFamily="Nova Square"
            py="1rem"
          >
            <Typewriter
              options={{ cursor: "" }}
              onInit={(tw) => {
                tw.pauseFor(8000).typeString("Tbilisi, Georgia").start();
              }}
            />
          </Heading>

          <Button
            background="rgba(235, 235, 235, 0.28)"
            backdropFilter="blur(1.5em)"
            borderRadius="0.75em"
            p="1.5em"
            className="btn-hover"
          >
            <Link href="#tickets">GET YOUR TICKET!</Link>
          </Button>
        </GridItem>

        <GridItem
          _hover={{ animation: scaleMovementAnimation }}
          order={[-1, -1, 1]}
        >
          <Image src="./images/biglogo.png" />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Landing;
