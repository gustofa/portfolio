import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gustavo Tofaletti - Portfolio" />
        <meta name="author" content="Gustavo Tofaletti" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Gustavo Tofaletti - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Gustavo Tofaletti - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
