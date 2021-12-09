import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => (
  <Layout title="instagram-clone">
    <Container>
      <Box>
        <Title>
          Instagram-clone <Badge>2021</Badge>
        </Title>
      </Box>
    </Container>
  </Layout>
);

export default Project;
