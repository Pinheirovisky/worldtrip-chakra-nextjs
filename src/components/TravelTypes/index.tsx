import { ListItem, ListIcon, List, Text } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";

export const TravelTypes = () => {
  return (
    <List
      py="2.25rem"
      px="3.25rem"
      display="flex"
      flexWrap="wrap"
      rowGap="1.69rem"
      columnGap="1rem"
      justifyContent="space-between"
    >
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={BsFillCircleFill}
          color="yellow.400"
          width="0.5rem"
          fontWeight="500"
        />
        <Text fontWeight="500" color="gray.600">
          vida noturna
        </Text>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={BsFillCircleFill}
          color="yellow.400"
          width="0.5rem"
          fontWeight="500"
        />
        <Text fontWeight="500" color="gray.600">
          praia
        </Text>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={BsFillCircleFill}
          color="yellow.400"
          width="0.5rem"
          fontWeight="500"
        />
        <Text fontWeight="500" color="gray.600">
          moderno
        </Text>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={BsFillCircleFill}
          color="yellow.400"
          width="0.5rem"
          fontWeight="500"
        />
        <Text fontWeight="500" color="gray.600">
          {" "}
          clássico
        </Text>
      </ListItem>
      <ListItem
        display="flex"
        alignItems="center"
        w="100%"
        justifyContent="center"
      >
        <ListIcon
          as={BsFillCircleFill}
          color="yellow.400"
          width="0.5rem"
          fontWeight="500"
        />
        <Text fontWeight="500" color="gray.600">
          e mais...
        </Text>
      </ListItem>
    </List>
  );
};
