import { Box } from "@chakra-ui/react"; 
import GlobalStyles from "../components/GlobalStyles";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import Meetups from "../components/sections/Meetups";
import Landing from "../components/sections/Landing";
import Schedule from "../components/sections/Schedule";
import Speakers from "../components/sections/Speakers";
import Sponsors from "../components/sections/Sponsors";
import Tickets from "../components/sections/Tickets";


const BackgroundColor = () => {
  return (
    <Box
      position="absolute"
      height="100%"
      width="100%"
      top="0px"
      left="0px"
      background="linear-gradient(89.87deg, #55007C 0.13%, #002A7C 102.53%)"
      zIndex="-1"
    ></Box>
  );
};

export default function Home() {

  return (
    <Box
      width={["100vw", "auto"]}
      overflow="hidden"
      paddingTop="106px"
      backgroundImage="./images/dots3.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <BackgroundColor />
      <GlobalStyles />

      <Landing />
      <AboutUs />
      <Speakers />
      <Meetups />
      <Schedule />
      <Tickets />
      <Sponsors />
      <ContactUs />

    </Box>
  );
}
