import { useState, useRef } from 'react'

import { Carousel, Image } from 'antd';

import Riddle from './Riddle';

const slideContainerStyle = {
    height: '100vh',
    width: '100vw',
};

export default () => {
    const [sliderIndex, setSliderIndex] = useState(1)
    const slider = useRef();
    const afterChange = (current) => {
        setSliderIndex(current)
        if (current === 2) {
            setInterval(() => {
                if (sliderIndex === 4) return;
                slider.current.next()
            }, 4000)
        }
    }

    return (
        <Carousel
            ref={ref => { slider.current = ref }}
            afterChange={afterChange}
            effect="scrollx"
            dots={false}
        >
            {/* Intro */}
            <div style={slideContainerStyle}>
                <Riddle turnNextPage={()=> slider.current.next()} />
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
                    Thank you for being my personal exorcist...
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
                    <p>Drive fast, fall hard, I'll keep you in my heart</p>
                    <p>Don't worry about tomorrow, don't mind the scars</p>
                    <p>Just drive fast, fall hard</p>
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/driver.jpg", import.meta.url).href}
                />
            </div>
            {/* Full Moon */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You always shine under the moonlight...
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
                    Lajos is happy with what you are doing while aging
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/Lajos-bff.jpg", import.meta.url).href}
                />
            </div>
            {/* Lake tilter */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    You have tilted a lot of lakes when you were 20...
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/lake-tilter.jpg", import.meta.url).href}
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
                    Even transformed to the Red Dragon
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
                    You have been always a daredevil.
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
                    Of course, just in dreams
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/sleeping-beauty.jpg", import.meta.url).href}
                />
            </div>
            {/* Twisted fate */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    This year you also mastered the cards and how to twist your fate!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/twisted-fate.jpg", import.meta.url).href}
                />
            </div>
            {/* Spring Summoner */}
            <div style={slideContainerStyle}>
                <div className='slide-explanation'>
                    Bringing the spring is not the most astonishing skill of yours, yet everyone needs to calm in between battlecries!
                </div>
            </div>
            <div style={slideContainerStyle}>
                <Image
                    rootClassName="slideImage"
                    src={new URL("./images/spring-summoner.jpg", import.meta.url).href}
                />
            </div>
            {/* outro */}
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

