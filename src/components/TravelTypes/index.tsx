import {
  ListItem,
  ListIcon,
  List,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";
import {
  MdNightlife,
  MdOutlineBeachAccess,
  MdOutlineLocationCity,
  MdOutlineTheaterComedy,
} from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";

const types = [
  {
    text: "vida noturna",
    icon: MdNightlife,
  },
  {
    text: "praia",
    icon: MdOutlineBeachAccess,
  },
  {
    text: "moderno",
    icon: MdOutlineLocationCity,
  },
  {
    text: "clássico",
    icon: MdOutlineTheaterComedy,
  },
  {
    text: "e mais...",
    icon: GiEarthAmerica,
  },
];

export const TravelTypes = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <List
      py={{ base: "2.25rem", xl: "5rem" }}
      px={{ base: "3.25rem", xl: "8.75rem" }}
      display="flex"
      flexWrap="wrap"
      rowGap="1.69rem"
      columnGap="1rem"
      justifyContent="space-between"
    >
      {types.map((type, key, arr) => (
        <ListItem
          key={type.text}
          display="flex"
          alignItems="center"
          w={{
            base: arr.length - 1 === key ? "100%" : "inherit",
            sm: "inherit",
          }}
          justifyContent={arr.length - 1 === key ? "center" : "inherit"}
          flexDirection={{ base: "row", sm: "column" }}
        >
          <ListIcon
            as={isWideVersion ? type.icon : BsFillCircleFill}
            color="yellow.400"
            fontSize={{ base: "0.5rem", sm: "5.313rem" }}
            fontWeight="500"
          />
          <Text
            fontWeight={{ base: "500", xl: "600" }}
            color="gray.600"
            fontSize={{ base: "1.125rem", xl: "1.5rem" }}
          >
            {type.text}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};
