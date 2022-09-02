import type { NextPage } from "next";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100%"
      direction="column"
      bgColor="#1e1e1e"
    >
      <Box className="door" onClick={() => router.push("/list")}>
        <Box className="door-front">
          <Box className="knob" />
        </Box>
        <Box className="door-back"></Box>
      </Box>
      <Heading as="h1" size="xl" mt="6" color="white" textAlign="center">
        동방에 누구?
      </Heading>
    </Flex>
  );
};

export default Home;
