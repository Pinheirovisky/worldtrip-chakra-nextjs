import {
  Box,
  Center,
  Grid,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import Info from "../../components/Info";
import uk from "../../../public/img/flags/europe/uk.png";
import france from "../../../public/img/flags/europe/france.png";
import italy from "../../../public/img/flags/europe/italy.png";
import czechRepublic from "../../../public/img/flags/europe/czech-republic.png";
import netherlands from "../../../public/img/flags/europe/netherlands.png";

export default function Europa() {
  const cities = [
    {
      name: "Londres",
      country: "Reino Unido",
      flag: uk,
      src: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    },
    {
      name: "Paris",
      country: "França",
      flag: france,
      src: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    },
    {
      name: "Roma",
      country: "Itália",
      flag: italy,
      src: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    },
    {
      name: "Parga",
      country: "República Theca",
      flag: czechRepublic,
      src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    },
    {
      name: "Amsterdã",
      country: "Holanda",
      flag: netherlands,
      src: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    },
  ];

  return (
    <Box w="100vw" h="100vh">
      <Header backButton />
      <HeroBanner />

      <Box
        px={{ base: "1rem", sm: "2.5rem", xl: "8.75rem" }}
        py={{ base: "1.5rem", xl: "5rem" }}
        pb="0"
        display={{ base: "block", sm: "flex" }}
      >
        <Text
          w="100%"
          pb={{ base: "1rem", sm: "0" }}
          fontWeight="400"
          fontSize={{ base: "0.875rem", sm: "1.125rem", xl: "1.5rem" }}
          textAlign="justify"
          color="gray.600"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
        <Center w="100%" pl={{ sm: "4rem", xl: "4.375rem" }}>
          <Info />
        </Center>
      </Box>

      <Text
        px={{ base: "1rem", sm: "2.5rem", xl: "8.75rem" }}
        mt={"2.25rem"}
        fontWeight="500"
        fontSize={{ base: "1.5rem", sm: "1.75rem", xl: "2.25rem" }}
        color="gray.600"
      >
        Cidades +100
      </Text>
      <Center mt={{ base: "1.25rem", sm: "1.75rem" }}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{ base: "1.25rem", sm: "2.813rem" }}
          mb="1.25rem"
        >
          {cities.map((city, key) => (
            <Card
              key={key}
              country={city.country}
              flag={city.flag.src}
              name={city.name}
              src={city.src}
            />
          ))}
        </Grid>
      </Center>
    </Box>
  );
}
