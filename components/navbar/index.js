import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { content } from "./content/index";
const NavLink = ({ children, to }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="#FFFFFF"
    _hover={{
      textDecoration: "none",
    }}
    href={to}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { pathname, locale, asPath } = useRouter();

  const t = content[locale];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        zIndex="999"
        background="rgba(0, 0, 0, 0.26)"
        backdropFilter="blur(336px)"
        position="fixed"
        width="100%"
        top="0px"
      >
        <Container as={Stack} maxW={"8xl"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Image
                  objectFit="contain"
                  width="100px"
                  height="100%"
                  src={"/logo.png"}
                />
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Object.keys(t).map((key) => (
                  <Box
                    key={key}
                    p="0.5em"
                    background="
                   linear-gradient(to right, #816FA0 2px, transparent 2px) 0 0,
                   linear-gradient(to right, #816FA0 2px, transparent 2px) 0 100%,
                   linear-gradient(to left, #816FA0 2px, transparent 2px) 100% 0,
                   linear-gradient(to left, #816FA0 2px, transparent 2px) 100% 100%,
                   linear-gradient(to bottom, #816FA0 2px, transparent 2px) 0 0,
                   linear-gradient(to bottom, #816FA0 2px, transparent 2px) 100% 0,
                   linear-gradient(to top, #816FA0 2px, transparent 2px) 0 100%,
                   linear-gradient(to top, #816FA0 2px, transparent 2px) 100% 100%"
                    backgroundRepeat="no-repeat"
                    backgroundSize="20px 20px"
                  >
                    <NavLink to={`#${key}`}>{t[key]}</NavLink>
                  </Box>
                ))}
              </HStack>
              <IconButton
                size={"lg"}
                bg="transparent"
                color="#C41DDF"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={8} h={8} />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          </Flex>
        </Container>
        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            position="fixed"
            right="0px"
            top="0px"
            px={2}
            height="100vh"
            width="50vw"
            background="#151060"
          >
            <Stack as={"nav"} spacing={4}>
              <IconButton
                size={"lg"}
                bg="transparent"
                alignSelf="flex-end"
                color="#C41DDF"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={8} h={8} />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              {Object.keys(t).map((key) => (
                <NavLink
                  to={
                    key === "language"
                      ? `/${t[key].toLowerCase()}/${pathname}`
                      : `/${locale}/${key}`
                  }
                  key={key}
                >
                  {t[key]}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
