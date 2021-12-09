import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const IconGrid = ({ children }) => (
  <Box>
    <Icon as={children} w={8} h={8} color="red.400" />
  </Box>
);

export const Interest = ({ name, icon }) => (
  <Box p={2} flex="1">
    <VStack>
      <Heading fontSize="xl" mb={4}>
        {name}
      </Heading>
      <Image src={icon} alt={name}></Image>
    </VStack>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
