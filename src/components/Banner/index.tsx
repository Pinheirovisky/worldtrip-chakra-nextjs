import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import bgMobile from "../../../public/img/bg-mobile.png";
import bgDesktop from "../../../public/img/bg-desktop.png";
import airplane from "../../../public/img/airplane.png";

export const Banner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box
      w="100vw"
      px={{ base: "1rem", sm: "2.75rem", xl: "8.75rem" }}
      py={["1.75rem", "5rem"]}
      backgroundImage={`url(${isWideVersion ? bgDesktop.src : bgMobile.src})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      {isWideVersion && (
        <Image
          position="absolute"
          bottom="-2.125rem"
          right="8.75rem"
          src={airplane.src}
          alt="Voe com a gente"
        />
      )}
      <Box w="100%" maxW={["32.75rem"]}>
        <Text
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
          color="white"
          fontWeight="500"
        >
          5 Continentes,
        </Text>
        <Text
          fontSize={{ base: "1.25rem", xl: "2.25rem" }}
          color="white"
          fontWeight="500"
        >
          infinitas possibilidades.
        </Text>
        <Text
          fontSize={{ base: "0.875rem", xl: "1.25rem" }}
          mt={{ base: "0.5rem", xl: "1.25rem" }}
          color="gray.300"
          fontWeight="400"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
    </Box>
  );
};
