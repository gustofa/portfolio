import { Box, Link, Spacer } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Gustavo Tofaletti. All Rights Reserved.
      <Spacer />
      <Link
        href="https://icons8.com/icon/P3zy5bFcYRzt/national-park"
        target="_blank"
      >
        icons by Icons8
      </Link>
    </Box>
  );
};

export default Footer;

/*
    <Box align="center" opacity={0.4} fontSize="sm">
     <Link href="https://icons8.com/icon/P3zy5bFcYRzt/national-park" target="_blank">
       icons by Icons8
       </Link>
     </Box>
*/
