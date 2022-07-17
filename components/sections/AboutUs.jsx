import { Container, Box, Text, Image, Stack, Heading, Grid, GridItem } from "@chakra-ui/react";

const Title = () => (
  <Heading as="h1" fontSize="2em" textDecoration="underline" display="block">
    About DEGAMEFI
  </Heading>
)

const AboutUs = () => {
  return (
    <Container
      mt='10em'
      maxW={"8xl"}
      color="#FFF"
      id="aboutus"
    >
      <Title />
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap='3rem'
        background="rgba(207, 207, 207, 0.08)"
        boxShadow="0px 8px 32px rgba(0, 0, 0, 0.25)"
        backdropFilter="blur(1.5em)"
        borderRadius="1.5em"
        p="2em"
        mt="3rem">
        <GridItem>
          <Heading as="h1" fontSize="2em">
            WHAT WE DO
          </Heading>
          <Text fontSize="1em" fontFamily="Nova Square" mt="2em">
            DeGameFi is a global unitive chain of unique events for people who
            are interested in Blockchain and developing the whole industry.
            DeGameFi – the combination of GameFi and DeFi is connecting
            investors, creators, developers and all the industry-involved people
            with each around the World.
          </Text>
        </GridItem>
        <GridItem>
          <Heading as="h1" fontSize="2em">
            GOALS
          </Heading>
          <Text fontSize="1em" fontFamily="Nova Square" mt="2em">
            We are dedicated to create fast-growing community and to evolve
            Blockchain system by connections around the World.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AboutUs;
