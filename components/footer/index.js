import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";
const ListHeader = ({ children, color, fontSize }) => {
  return (
    <Text fontWeight={"600"} fontSize={fontSize} mb={2} color={color}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="#2D0A5D" color="#FFF">
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Image
                width="200px"
                objectFit="contain"
                height="100%"
                src={"/logoBig.png"}
              />
            </ListHeader>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader color="#FFF" fontSize="1.5em">
              Guide
            </ListHeader>
            <Text>
              If you have any questions, contact us, and our team will answer
              all of your questions.
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader color="#FFF" fontSize="1.5em">
              Company
            </ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Projects</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor="#FFF">
        <Container
          as={Stack}
          maxW={"8xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Degamefi. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
