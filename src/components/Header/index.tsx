import { Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h={{ base: "3.125rem", xl: "6.25rem" }}
      align="center"
      justifyContent="center"
    >
      <Logo />
    </Flex>
  );
};
