import { Box, Text, Stack } from "@chakra-ui/react";
import bg from "../../../public/background.png";

export const Banner = () => {
  return (
    <Box
      w="100vw"
      px="1rem"
      py="1.75rem"
      backgroundImage={`url(${bg.src})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Text fontSize="xl" color="white" fontWeight="500">
        5 Continentes,
      </Text>
      <Text fontSize="xl" color="white" fontWeight="500">
        infinitas possibilidades.
      </Text>
      <Text fontSize="sm" mt="0.5rem" color="gray.300" fontWeight="400">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
  );
};
