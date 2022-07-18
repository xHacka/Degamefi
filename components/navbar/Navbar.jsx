import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import content from "../../data/navbar.data.json"; 

const NavLink = ({ children, to }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="#FFFFFF"
    position="relative"
    _before={{
      content: '"["',
      color: "#816FA0",
      fontSize: ["2rem", "2.75rem"],
      position: "absolute",
      left: "-1",
      bottom: ["-15%", "-35%", "-45%"],
      visibility: "hidden",
    }}
    _after={{
      content: '"]"',
      color: "#816FA0",
      fontSize: ["2rem", "2.75rem"],
      position: "absolute",
      left: "fit-content",
      bottom: ["-15%", "-35%", "-45%"],
      visibility: "hidden",
    }}
    _hover={{
      "&::after, &::before": { visibility: "visible" },
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
        py="1rem" 
      >
        <Container as={Stack} maxW={"8xl"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <Box> 
                <Link href={pathname === '/' ? '#' : '/'} cursor='pointer'>
                  <Image
                    objectFit="contain"
                    width="100px"
                    height="100%"
                    src={"./images/logo.png"}
                    alt=""
                  />
                </Link>
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Object.keys(t).map((key) => (
                  <Box key={key} p="0.5em" position="relative">
                    <NavLink to={key.toLowerCase() !== 'gallery' ? `#${key}` : 'gallery'}>{t[key]}</NavLink>
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
