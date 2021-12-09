import { useState } from "react";
import {
  Container,
  Box,
  Text,
  Button,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Link,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast({
        title: "Ups! Problems...",
        description: "There was an error processing your request.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setButtonText("Send");
      return;
    }
    toast({
      title: "Success!",
      description: "Thanks for your message!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setButtonText("Send");
  };

  return (
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
        <VStack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box>
            <Text fontSize={{ base: "md", md: "xl" }}>
              Feel free to reach me out via this contact form, email or LinkedIn
              DM.
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <Link href="mailto:gus.tofaletti@gmail.com" target="_blank">
                  <Button
                    size="lg"
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<MdEmail size="20px" />}
                  >
                    gus.tofaletti@gmail.com
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gustavotofaletti/"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/gustofa" target="_blank">
                  <Button
                    size="lg"
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    GitHub
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<MdLocationOn size="20px" />}
                >
                  Australia
                </Button>
              </VStack>
            </Box>
          </Box>
        </VStack>

        <Box bg="white" borderRadius="lg" w="100%">
          <Box m={8} color="#0B0E3F">
            <VStack spacing={5}>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <FormControl id="name" isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input
                      type="text"
                      name="fullname"
                      value={fullname}
                      size="md"
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      size="md"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="message"
                    name="message"
                    value={message}
                    size="md"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="button" float="right">
                  <Button
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    mt={2}
                  >
                    {buttonText}
                  </Button>
                </FormControl>
              </form>
            </VStack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contact;
