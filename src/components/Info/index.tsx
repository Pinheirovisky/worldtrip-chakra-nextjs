import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const infos = [
  { number: 50, text: "países" },
  { number: 60, text: "línguas" },
  { number: 24, text: "cidades +100", icon: true },
];

export default function Info() {
  return (
    <Flex w="100%" justifyContent="space-between">
      {infos.map((info, key) => (
        <Box key={key} w="fit-content">
          <Text
            textAlign={{ sm: "center" }}
            fontWeight="600"
            fontSize={{ base: "1.5rem", sm: "2rem", xl: "3rem" }}
            color="yellow.400"
          >
            {info.number}
          </Text>
          <Text
            fontWeight={{ base: "400", sm: "500" }}
            fontSize={{ base: "1.125rem", xl: "1.6875rem" }}
            color="gray.600"
            display="flex"
            alignItems="center"
          >
            {info.text}
            {info?.icon && (
              <Icon
                as={AiOutlineInfoCircle}
                w={{ base: "0.625rem", sm: "0.9375rem" }}
                ml=".313rem"
                color="gray.400"
              />
            )}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
