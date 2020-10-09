import React from 'react'
import Slider from '../Components/components/Slider'
import ContentBlock from '../Components/components/ContentBlock'
import styled from 'styled-components'

const MainWraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    & > div{
        &:nth-child(1){
            height: 60%;
        }
        &:nth-child(2){
            height: 40%;
            & > div{
          
                & > div{
                    display: flex;
                }
            }
        }
    }
    
    ${props=>props.theme.media.desktop2}{
        flex-direction: row;
        min-height: 450px;
        height: 65%;
        & > div{
            height: 100% !important;
            &:nth-child(1){
                width: 60%;
            }
            &:nth-child(2){
                width: 40%;
            }
        }
    }

`

const MainSection = ()=>{
    return(
        <MainWraper>
            <Slider />
            <ContentBlock shopNow h1Content='Discover innovative ways to decorate' content='We provide unmatched quality, comfort and style for property owners across the country. Our exports combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and waht you love.'/>
        </MainWraper>
    )
}

export default MainSection