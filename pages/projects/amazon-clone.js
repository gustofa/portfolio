import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Box,
  Image,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Project = () => (
  <Layout title="amazon-clone">
    <Container>
      <Box>
        <Title>
          Amazon-clone <Badge>2021</Badge>
        </Title>
      </Box>
    </Container>
  </Layout>
);

export default Project;
