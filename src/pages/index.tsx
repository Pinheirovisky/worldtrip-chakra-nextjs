import { Box, Divider, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Swiper } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Box display="flex" justifyContent="center">
        <Divider w="3.75rem" borderColor="blackAlpha.600" borderWidth="1px" />
      </Box>
      <Box py="1.5rem">
        <Text
          textAlign="center"
          fontSize="xl"
          fontWeight="500"
          color="gray.600"
        >
          Vamos nessa?
        </Text>
        <Text
          textAlign="center"
          fontSize="xl"
          fontWeight="500"
          color="gray.600"
        >
          Então escolha seu continente
        </Text>
      </Box>
      <Swiper />
    </Box>
  );
}
