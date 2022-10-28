import { Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export const HeroBanner = () => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  return isMobileVersion ? (
    <Center
      w="100vw"
      backgroundImage="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minH="9.375rem"
    >
      <Text
        fontSize={{ base: "1.75rem", sm: "2.25rem", xl: "3rem" }}
        color="white"
        fontWeight="600"
      >
        EUROPA
      </Text>
    </Center>
  ) : (
    <Flex
      w="100vw"
      backgroundImage={{
        base: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
        xl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80",
      }}
      backgroundPosition={{ base: "bottom", sm: "center" }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minH={{ base: "16.875rem", xl: "31.25rem" }}
      alignItems="end"
      px={{ sm: "2.5rem", xl: "8.75rem" }}
      py="2.5rem"
    >
      <Text
        fontSize={{ base: "1.75rem", sm: "2.25rem", xl: "3rem" }}
        color="white"
        fontWeight="500"
      >
        EUROPA
      </Text>
    </Flex>
  );
};
