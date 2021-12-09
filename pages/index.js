import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Kbd,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { Interest } from "../components/grid-item";

import dogIcon from "../public/images/icons8-dog-100.png";
import parkIcon from "../public/images/icons8-national-park-100.png";
import pizzaIcon from "../public/images/icons8-pizza-100.png";

const MotionBox = motion(Box);

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      <MotionBox
        borderRadius="lg"
        fontSize={"xl"}
        mb={8}
        mt={8}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          //repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 1,
        }}
      >
        I&apos;m a React Developer who code with passion and is always keen to
        learn!
      </MotionBox>

      <VStack>
        <Box flexGrow={1} mb={6}>
          <Heading as="h2" variant="page-title">
            Gustavo Tofaletti
          </Heading>
          <span>
            <Kbd>passion</Kbd> + <Kbd>motivation</Kbd>
          </span>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 4 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            //display="inline-block"
            borderRadius="lg"
            src="/images/perfil_sunset_small.jpg"
            alt="Profile image"
          />
        </Box>
      </VStack>

      <a name="about"></a>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" mt={{ base: 4, md: 14 }}>
          About Me
        </Heading>
        <Paragraph fontSize={"lg"}>
          For many years I trained as a developer using different tools and
          programming languages. Three years ago I became a digital nomad. I
          traveled the world and met many wonderful places and people.
        </Paragraph>
        <Paragraph fontSize={"lg"}>
          Now I am ready to use all my knowledge and experience in new
          challenges, using Javascript and React to solve problems, satisfy
          needs and build new web applications that improve people´s lives.
        </Paragraph>
        <Paragraph fontSize={"lg"}>
          {" "}
          I am looking to be part of a team where I can contribute my skills and
          grow based on effort and a lot of motivation. If I am the person you
          are looking for let talk!{" "}
        </Paragraph>
      </Section>
      <a name="projects"></a>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={{ base: 4, md: 14 }}>
          Projects
        </Heading>
        <Projects></Projects>
      </Section>

      <Section mt={20} delay={0.4}>
        <Heading as="h3" variant="section-title" mt={{ base: 4, md: 14 }}>
          I ♥
        </Heading>
        <HStack maxW={600}>
          <Interest name="Dogs" icon={dogIcon}></Interest>
          <Interest name="Travel" icon={parkIcon}></Interest>
          <Interest name="Food" icon={pizzaIcon}></Interest>
        </HStack>
      </Section>
      <a name="contact"></a>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title" mt={{ base: 4, md: 14 }}>
          Contact Me
        </Heading>
        <Contact></Contact>
      </Section>
    </Container>
  </Layout>
);

export default Home;
