import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FaCopyright, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        rowGap={3}
        justifySelf="end"
        mt={10}
        // position="absolute"
        // transform="translate(-50%, -50%)"
        // bottom="0"
        // left='50%'
        // zIndex={40}
      >
        <Box>
          <Text>
            Developed by{" "}
            <Link href="https://siaw.dev" target="_blank">
              Siaw A. Nicholas{" "}
            </Link>
          </Text>
        </Box>
        <Flex gap={4}>
          <Link target="_blank" href="https://github.com/ayequill/dictionary" >
            {/* {" "} */}
            <FaGithub size={30} />{" "}
          </Link>
          <Link target="_blank" href="https://twitter.com/ayequill">
            {" "}
            <FaTwitter size={30} />{" "}
          </Link>
          <Link>
            {" "}
            <FaLinkedin size={30} />{" "}
          </Link>
        </Flex>
        <Flex gap={2} alignItems="center">
          <FaCopyright />
          <Text>2023</Text>
        </Flex>
      </Flex>
    </>
  );
}
