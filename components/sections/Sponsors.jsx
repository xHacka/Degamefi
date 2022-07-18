import {
  Container,
  Box,
  Stack,
  Grid,
  Image,
  Link,
  Button,
  Heading
} from "@chakra-ui/react";
import React from "react";
import sponsorsData from "../../data/sponsors.data.json";

const Sponsors = () => {
  return (
    <Container
      as={Stack}
      id="sponsors"
      maxW={"8xl"}
      color="#FFF"
      gap="3em"
      ml={['1rem', '1.5rem', '2rem', '2rem', 'auto']}
      mb="6em"
    >
      <Heading as='h1' fontSize="2em" textDecoration="underline">
        SPONSORS
      </Heading>
      <Grid>
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap='1rem'
          mb="2em"
        >
          {
            sponsorsData.premium.map(({ id, img }) => (
              <Image key={id} src={img} w='60%' alt="Premium Sponsor"/>
            ))
          }
        </Grid>
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap='1rem'
        >
          {
            sponsorsData.standard.map(({ id, img }) => (
              <Image key={id} src={img} w='50%' ml='5%' alt="Standard Sponsor"/>
            ))
          }
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Link href="#tickets">
          <Button
            background="rgba(235, 235, 235, 0.28)"
            backdropFilter="blur(1.5em)"
            borderRadius="0.75em"
            p="1.5em"
            className="btn-hover"
          >
            GET YOUR TICKET!
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Sponsors;

/*
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
        <Link href="#tickets">
          <Button
            background="rgba(235, 235, 235, 0.28)"
            backdropFilter="blur(1.5em)"
            borderRadius="0.75em"
            p="1.5em"
            className="btn-hover"
          >
            GET YOUR TICKET!
          </Button>
        </Link>
      </Box>
    </Container>
*/
