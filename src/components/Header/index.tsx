import { Flex, Icon, Link } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { FaChevronLeft } from "react-icons/fa";
import NextLink from "next/Link";

interface HeaderProps {
  backButton?: boolean;
}

export const Header = ({ backButton }: HeaderProps) => {
  return (
    <Flex
      bg="white"
      w="100%"
      h={{ base: "3.125rem", xl: "6.25rem" }}
      align="center"
      justifyContent="center"
    >
      {backButton && (
        <NextLink href="/" passHref>
          <Link
            left={{ base: "1rem", sm: "2.5rem", xl: "8.75rem" }}
            position="absolute"
          >
            <Icon
              as={FaChevronLeft}
              w={{ base: "1rem", xl: "1.5rem" }}
              h={{ base: "1rem", xl: "1.5rem" }}
            />
          </Link>
        </NextLink>
      )}
      <Logo />
    </Flex>
  );
};
