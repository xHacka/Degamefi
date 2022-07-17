// https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/react

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';

const meetupsData = [
    {
        id: 1,
        month: 'april',
        imgs: [
            './images/meetups/april/1.jpg',
            './images/meetups/april/2.jpg',
            './images/meetups/april/3.jpg',
            './images/meetups/april/4.jpg',
            './images/meetups/april/5.jpg'
        ],
        text: `On April 14, DeGameFi  held the first ever in Georgia MeetUp for people, who are interested in DeFi/GameFi/NFT industries. On this day our we’ve discussed several Georgian Start-Ups in Web3.0.`
    },
    {
        id: 2,
        month: 'may',
        imgs: [
            './images/meetups/may/1.jpg',
            './images/meetups/may/2.jpg',
            './images/meetups/may/3.jpg',
            './images/meetups/may/4.jpg',
            './images/meetups/may/5.jpg'
        ],
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus ipsa placeat ex natus architecto ab ea laboriosam saepe magni, doloribus temporibus libero suscipit dolorem repellat autem beatae exercitationem corporis.`
    },
    {
        id: 3,
        month: 'june',
        imgs: [
            './images/meetups/june/1.jpg',
            './images/meetups/june/2.jpg',
            './images/meetups/june/3.jpg',
            './images/meetups/june/4.jpg',
            './images/meetups/june/5.jpg'
        ],
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt atque corporis esse doloremque voluptatum modi voluptatibus unde. Eaque nostrum, praesentium assumenda nam similique officia impedit illo vero ex ad.`
    }
]

const Arrow = (props) => {
    const disabled = props.disabled ? "arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />)}
            {!props.left && (<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />)}
        </svg>
    )
}

const MeetupCard = ({ month, imgs, text }) => {

    return (
        <Grid className="keen-slider__slide"
            templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
            alignItems='center'
            justifyContent='center'
            gap='1em' 
        >
            <GridItem>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    stopOnHover={false}
                    centerMode={true}
                    showThumbs={false}
                >
                    {imgs.map((img, index) => (
                        <Box>
                            <Image
                                src={img}
                                key={index}
                            />
                        </Box>
                    ))}
                </Carousel>
            </GridItem>
            <GridItem
                display='flex'
                flexDirection='column'
                gap='2rem'
                mr='2rem'
            >
                <Heading as='h1'>{month}</Heading>
                <Text>{text}</Text>
            </GridItem>
        </Grid>
    )
}

const MeetupsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRefMain, instanceRefMain] = useKeenSlider({
        initial: 0,
        slideChanged(slider) { setCurrentSlide(slider.track.details.rel) },
        created() { setLoaded(true) },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRefMain} className="keen-slider" mx='2rem'>
                    {
                        meetupsData.map(({ id, month, imgs, text }) => (
                            <MeetupCard key={id} month={month} imgs={imgs} text={text} />
                        ))
                    }
                </div>
                {loaded && instanceRefMain.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => e.stopPropagation() || instanceRefMain.current?.prev()}
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) => e.stopPropagation() || instanceRefMain.current?.next()}
                            disabled={currentSlide === instanceRefMain.current.track.details.slides.length - 1}
                        />
                    </>
                )}
            </div>
            {loaded && instanceRefMain.current && (
                <div className="dots">
                    {[...Array(instanceRefMain.current.track.details.slides.length).keys()]
                        .map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => { instanceRefMain.current?.moveToIdx(idx) }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                </div>
            )}
        </>
    )
}

export default MeetupsSlider

// https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/autoswitch/react
// const [sliderRef] = useKeenSlider(
//     { loop: true, drag: false, mode: 'snap' },
//     [(slider) => {
//         let timeout;
//         let mouseOver = false;
//         function clearNextTimeout() { clearTimeout(timeout) }
//         function nextTimeout() { clearTimeout(timeout); if (mouseOver) return; timeout = setTimeout(() => { slider.next() }, 2000) }
//         slider.on("created", () => {
//             slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
//             slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
//             nextTimeout()
//         })
//         slider.on("dragStarted", clearNextTimeout)
//         slider.on("animationEnded", nextTimeout)
//         slider.on("updated", nextTimeout)
//     }]
// )

{/* <GridItem ref={sliderRef} className="keen-slider nodots" w='40rem' h='30rem'
            >
                <Box>
                    {
                        imgs.map((img, idx) => (
                            <Image
                                src={img}
                                key={idx}
                                objectFit='cover'
                                objectPosition='center'
                                // w='100%'
                                // h='100%'
                                className="keen-slider__slide number-slide"
                            />
                        ))
                    }
                </Box>
            </GridItem> */}