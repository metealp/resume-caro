import { useState, useEffect } from 'react'
import { Input } from 'antd';

export default (props) => {
    const theAnswer = "river"
    const [isInputDisabled, setIsInputDisabled] = useState(false)

    const timerForNextPage = () => (setTimeout(() => {
    }, 6000))
    
    const onChange = (event) => {
        const normalizedValue = event.target.value ? event.target.value.toLowerCase() : '' 
        if(normalizedValue.includes(theAnswer)) {
            setIsInputDisabled(true)
            props.setCarouselAutoPlay()
        }
    }
    const introLine1 = <p>Please unfasten your mindbelt. First, we need to strech your mind a little bit</p>
    const congratsLine = <p>Congratulations my smart love! Like your rivers, you crossed so many lives and impressed all of them! You can start swiping ---&gt; </p>

    const formDiv = 
        <div id='riddleFormContainer'>
            <p>What runs, but never walks. Murmurs, but never talks. Has a bed, but never sleeps. And has a mouth, but never eats?</p>
            <Input disabled={isInputDisabled} placeholder="your answer dear" onChange={onChange}/>
        </div>
    return (
        <div id='riddleContainer'>
            <h1 className='riddlePageHeader'>A guide to <p><strong>Aging Like A Fine Wine</strong></p></h1>
            {introLine1}
            {formDiv}
            {isInputDisabled ? congratsLine : null}
        </div>
    )
}

