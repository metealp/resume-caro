import { useState, useRef } from 'react'

import { Carousel, Image } from 'antd';
import {
    HeartFilled,
  } from '@ant-design/icons';
import Riddle from './Riddle';

const slideContainerStyle = {
    height: '100vh',
    width: '100vw',
};

export default () => {
    const [sliderIndex, setSliderIndex] = useState(1)
    const [shouldAutoPlay, setShouldAutoPlay] = useState(false)
    const slider = useRef();
    const afterChange = (current) => {
        setSliderIndex(current)
    }

    return (
        <Carousel
            ref={ref => { slider.current = ref }}
            afterChange={afterChange}
            effect="fade"
            dots={false}
            autoplay={shouldAutoPlay}
            autoplaySpeed={3500}
        >
            {/* Intro */}
            <div style={slideContainerStyle}>
                <Riddle turnNextPage={()=> slider.current.next()} setCarouselAutoPlay={() => setShouldAutoPlay(true)} />
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/achievement.jpg", import.meta.url).href}
                />
            </div>
            {/* Exorcist Section */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You have proved your many skills last year, such as exorcising.
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/exorcist.jpg", import.meta.url).href}
                />
            </div>
            {/* Driver Section */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    <p>And performance driving.</p>
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/driver.jpg", import.meta.url).href}
                />
            </div>
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    <p>Drive fast, fall hard, I'll keep you in my heart</p>
                    <p>Don't worry about tomorrow, don't mind the scars</p>
                    <p>Just drive fast, fall hard</p>
                </div>
            </div>
            {/* Full Moon */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You were the shiniest under the full moon!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/full-moon.jpg", import.meta.url).href}
                />
            </div>
            {/* Lajos */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    Someone else is also happy with what you are doing while aging
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/Lajos-bff.jpg", import.meta.url).href}
                />
            </div>
            {/* Mother Eagle */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You have also learned how to train eagles!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/mother-eagle.jpg", import.meta.url).href}
                />
            </div>
            {/* Red Dragon */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    And unlocked the Red Dragon inside you.
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/red-dragon.jpg", import.meta.url).href}
                />
            </div>
            {/* Risk Taker */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    It was not easy but you have been always a daredevil.
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/risk-taker.jpg", import.meta.url).href}
                />
            </div>
            {/* Sleeping Beauty */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    Of course, only in dreams :)
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/sleeping-beauty.jpg", import.meta.url).href}
                />
            </div>
            {/* Spring Summoner */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    Everyone needs to rest in between battles! But one day, you brought the spring by simply waking up from your dreams. 
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/spring-summoner.jpg", import.meta.url).href}
                />
            </div>
            {/* Twisted fate */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You also mastered the cards and how to twist your fate by top-decking!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/twisted-fate.jpg", import.meta.url).href}
                />
            </div>
            {/* outro */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    HAPPY BIRTHDAY!<HeartFilled style={{color: 'red'}}/>
                </div>
            </div>
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    It looks like you are already aging like a fine wine!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    I wish I could spend my all time to perfectioning this but, hey!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/last.jpg", import.meta.url).href}
                />
            </div>
        </Carousel>
    )
}

