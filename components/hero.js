import NextLink from "next/link";
import {
  Container,
  Box,
  Text,
  LinkBox,
  useColorModeValue,
  Stack,
  Heading,
  Button,
  Flex,
  Img,
} from "@chakra-ui/react";
import { ChevronRightIcon, PlayIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";
import { IconGrid } from "./grid-item";

export const HeroProject = ({
  children,
  id,
  title,
  subtitle,
  thumbnail,
  url,
}) => (
  <Container
    maxW={"7xl"}
    borderRadius="lg"
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
  >
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 10 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "3xl", lg: "4xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal",
              zIndex: -1,
            }}
          >
            {title}
          </Text>
          <br />
          <Text as={"span"} color={"teal"}>
            {subtitle}
          </Text>
        </Heading>
        <Text color={useColorModeValue("grey.300", "grey.600")}>
          {children}
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <LinkBox cursor="pointer">
            <NextLink href={`/projects/${id}`}>
              <Button
                rounded={"lg"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={"teal.500"}
                _hover={{ bg: "teal.300" }}
                rightIcon={<ChevronRightIcon />}
              >
                Read more...
              </Button>
            </NextLink>
          </LinkBox>
          <LinkBox cursor="pointer">
            <NextLink href={url} passHref>
              <Button
                as="a"
                rounded={"lg"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                target="_blank"
              >
                Live Demo
              </Button>
            </NextLink>
          </LinkBox>
        </Stack>
      </Stack>

      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          position={"relative"}
          height={"300px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <Img
            alt={"Amazon clone"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={thumbnail}
          />
        </Box>
      </Flex>
    </Stack>
    <Box>
      {
        //iconstack.map((i) => {        <IconGrid>i</IconGrid>;      })
      }
    </Box>
  </Container>
);
