import { Box, Center, Divider, Text } from "@chakra-ui/react";
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
        <Divider
          w={{ base: "3.75rem", xl: "5.625rem" }}
          borderColor="blackAlpha.600"
          borderWidth="1px"
        />
      </Box>
      <Box py={{ base: "1.5rem", xl: "3.25rem" }}>
        <Text
          textAlign="center"
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
          fontWeight="500"
          color="gray.600"
        >
          Vamos nessa?
        </Text>
        <Text
          textAlign="center"
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
          fontWeight="500"
          color="gray.600"
        >
          Então escolha seu continente
        </Text>
      </Box>
      <Center>
        <Swiper />
      </Center>
    </Box>
  );
}
