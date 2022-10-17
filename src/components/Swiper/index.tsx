import { Swiper as SwiperLib, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Box, Center, Text } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperImgs = [
  {
    id: "01",
    title: "Europa",
    desc: "O continente mais antigo.",
    img: "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "América do Sul",
    desc: "Venha conhecer o novo mundo.",
    img: "https://images.unsplash.com/photo-1654086441559-f2e71be7f050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "América do Norte",
    desc: "Encare uma vida de cinema.",
    img: "https://images.unsplash.com/photo-1645663878241-e26d431af1c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Ásia",
    desc: "Busque desafios inesquecíveis.",
    img: "https://images.unsplash.com/photo-1530569112985-108dc2578ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "África",
    desc: "Fuja do mais do mesmo.",
    img: "https://images.unsplash.com/photo-1592172578991-51bac865e437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Oceania",
    desc: "Aproveite o outro lado do mundo",
    img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
];

export const Swiper = () => {
  return (
    <Box>
      <SwiperLib
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {swiperImgs.map((image) => (
          <SwiperSlide key={image.id}>
            <Center
              w="100vw"
              px="1rem"
              py="1.75rem"
              backgroundImage={`url(${image.img}&w=375&q=80)`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              minH="15.625rem"
              flexDir="column"
            >
              <Text
                textAlign="center"
                fontSize="1.5rem"
                color="white"
                fontWeight="700"
              >
                {image.title}
              </Text>
              <Text
                textAlign="center"
                fontSize="0.875rem"
                mt="0.75rem"
                color="white"
                fontWeight="700"
              >
                {image.desc}
              </Text>
            </Center>
          </SwiperSlide>
        ))}
      </SwiperLib>
    </Box>
  );
};
