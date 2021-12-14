import {
  Container,
  Divider,
  createIcon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import Section from "./section";
import { HeroProject } from "./hero";

const Projects = () => {
  return (
    <Container maxW={"7xl"} borderRadius="lg">
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section delay={0.1} mb={0}>
          <HeroProject
            id="amazon-clone"
            title="Amazon-clone"
            subtitle="fully functional"
            thumbnail="../images/amazon.jpg"
            url="https://amazona-clone-gus.herokuapp.com/"
            // iconstack={[{ IoLogoReact }, { IoLogoNodejs }]}
          >
            eCommerce web application, Amazon look-a-like. Built with React,
            Redux, Express, Node.js and MondoDB.
          </HeroProject>
        </Section>
        <Divider my={6} />
        <Section delay={0.2}>
          <HeroProject
            id="instagram-clone"
            title="Instagram-clone"
            subtitle="a real social media"
            thumbnail="../images/ig.jpg"
            url="https://instagram-clone-58c31.firebaseapp.com/"
            // iconstack={[{ IoLogoReact }, { IoLogoNodejs }]}
          >
            Web application that permits interaction with other users uploading
            images and comments. Built with React and Firebase.
          </HeroProject>
        </Section>
        <Divider my={6} />
        <Section delay={0.3}>
          <HeroProject
            id="calculator"
            title="Calculator"
            subtitle="Javascript"
            thumbnail="../images/calc.jpg"
            url="https://gustofa.github.io/calculator/"
            // iconstack={[{ IoLogoReact }, { IoLogoNodejs }]}
          >
            Normal calculator built with Vanilla Javascript
          </HeroProject>
        </Section>
        <Divider my={6} />
        <Section delay={0.3}>
          <HeroProject
            id="portfolio"
            title="Portfolio"
            subtitle="My personal web"
            thumbnail="../images/portfolio.jpg"
            url="/"
            // iconstack={[{ IoLogoReact }, { IoLogoNodejs }]}
          >
            Built with NextJS and Chakra UI
          </HeroProject>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
