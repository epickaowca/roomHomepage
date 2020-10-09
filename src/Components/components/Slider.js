import React, { useState } from 'react'
import styled from 'styled-components'
import Arrow from '../subElements/arrow'
import Header from './Header'
const SliderContainer = styled.div`
    background-image: url(${props=>props.imgSlide});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    & span{
        position: absolute;
        bottom: 0px;
        right: 0;
        ${props=>props.theme.media.desktop2}{
            right: -140px;
        }
        
    }
`

const Slider = ()=>{
    const [slide, setSlide] = useState(1)
    const imgSlide = require(`../../asset/desktop-image-hero-${slide}.jpg`)
    return(
        <SliderContainer imgSlide={imgSlide}>
            <Header />
            <div></div>
            {/* <img alt='slide'  /> */}
            <span>
                <Arrow click={()=>slide === 3 ? setSlide(1) : setSlide(prev=>prev+1)} side='left' />
                <Arrow click={()=>slide === 1 ? setSlide(3) : setSlide(prev=>prev-1)} side='right' />
            </span>
        </SliderContainer>
    )
}

export default Slider