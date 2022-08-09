import React from "react";
import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";

const Home = () => {
  return (
    <>
      <Box padding={"10px"}>
        <HStack>
          <Box h={"120vh"} w={"20%"} borderRight={"1px solid gray"}>
            <FilterSort />
          </Box>
          <Box h={"120vh"} w={"80%"}>
            <Text fontSize={"30px"} fontWeight={"600"}>
              Music
            </Text>
            <MusicRecords />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
