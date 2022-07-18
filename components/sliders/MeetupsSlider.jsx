// https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/react

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import meetupsData from "../../data/meetups.data.json";

const Arrow = (props) => {
  const disabled = props.disabled ? "arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};

const MeetupCard = ({ month, imgs, text, year }) => {
  return (
    <Grid
      className="keen-slider__slide"
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      alignItems="center"
      justifyContent="center"
      gap="1em"
      position="relative"
    >
      <Box
        position="absolute"
        left="4.5%"
        right="0"
        top="0"
        bottom="0"
        zIndex="-1"
      ></Box>
      <GridItem
        ml={["4rem"]}
        mr={["3rem", "3rem", "1rem", 0]}
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          showThumbs={false}
        >
          {imgs.map((img, index) => (
            <Box key={index}>
              <Image src={img} alt="Carousel Image"/>
            </Box>
          ))}
        </Carousel>
      </GridItem>
      <GridItem
        display="flex"
        flexDirection="column"
        gap="2rem"
        mr="3rem"
        ml={["4rem", "4rem", "1rem", 0]}
        py='4rem'
        px='2rem'
        borderRadius='36px'
        background="rgba(85, 0, 124, 0.36)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(5.8px)"
      >
        <Heading as="h1" fontSize={"1.5rem"}>
          {month} - {year}
        </Heading>
        <Text>{text}</Text>
      </GridItem>
    </Grid>
  );
};

const MeetupsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRefMain, instanceRefMain] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRefMain} className="keen-slider" mx="4rem">
          {meetupsData.map((meetup) => (
            <MeetupCard key={meetup.id} {...meetup} />
          ))}
        </div>
        {loaded && instanceRefMain.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRefMain.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRefMain.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRefMain.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRefMain.current && (
        <div className="dots">
          {[
            ...Array(
              instanceRefMain.current.track.details.slides.length
            ).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRefMain.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MeetupsSlider;
