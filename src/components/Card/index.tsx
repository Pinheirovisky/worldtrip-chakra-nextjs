import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

interface CardProps {
  name: string;
  country: string;
  flag: string;
  src: string;
}

export default function Card({ name, country, flag, src }: CardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box minW={{ base: "16rem" }} border="1px" borderColor="transparent">
      <Image
        alt={name}
        src={isWideVersion ? src + "&w=750&q=80" : src + "&w=256&q=80"}
        objectFit="cover"
        boxSize="16rem"
        h={{ base: "10.813rem" }}
        border="1px"
        borderColor="transparent"
        borderBottom="none"
        borderTopRadius="0.25rem"
      />
      <Box border="1px" borderColor="transparent">
        <HStack
          px="1.5rem"
          py="1.125rem"
          justifyContent="space-between"
          h={{ base: "6.625rem" }}
          border="1px"
          borderColor="yellow.300"
          borderTop="none"
          borderBottomRadius="0.25rem"
        >
          <VStack alignItems="flex-start">
            <Text
              fontFamily="Barlow Condensed"
              fontWeight="600"
              fontSize="1.5rem"
              color="gray.600"
            >
              {name}
            </Text>
            <Text
              fontFamily="Barlow Condensed"
              fontWeight="500"
              fontSize="1.125rem"
              color="gray.500"
            >
              {country}
            </Text>
          </VStack>
          <Center>
            <Image alt={country} src={flag} objectFit="cover" />
          </Center>
        </HStack>
      </Box>
    </Box>
  );
}
