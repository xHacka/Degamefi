// https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/basic/free-snap-mode/react

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box, Text, Image, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

const SpeakerSlider = ({ speakers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: windowSize > 1000 ? 4 : 3,
      spacing: 10,
    },
  });

  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      py="4rem"
      cursor={"grab"}
      _active={{ cursor: "grabbing" }}
    >
      {speakers.map((speaker) => (
        <Box
          key={speaker.id}
          className="keen-slider__slide"
          position="relative"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <Image className="speaker-img" borderRadius="50%" src={speaker.img} alt="Speaker"/>
          <Box
            className="speaker-cover"
            position="absolute"
            left="50%"
            top="50%"
            color="#FFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            borderRadius="50%"
            /* From https://css.glass */
            background="rgba(47, 9, 93, 0.26)"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(8.6px)"
            border="1px solid rgba(47, 9, 93, 0.42)"
          >
            <Text className="speaker-text">{speaker.fname}</Text>
            <Text className="speaker-text">{speaker.lname}</Text>
            <Text className="speaker-text">{speaker.regalia}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SpeakerSlider;