import React from 'react';
import styled from 'styled-components';
import image1 from '../asset/image-about-dark.jpg'
import image2 from '../asset/image-about-light.jpg'
import ContentBlock from '../Components/components/ContentBlock'

const SecondaryMainWraper = styled.div`
    display: flex;
    flex-direction: column;
    height: 1200px;
    margin: auto;
    & > div {
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        &: nth-child(1){
            width: 100%;
            background-image: url('${props=>props.image1}');
        }
        &: nth-child(2){
            width: 100%;
            background: white;
        }
        &: nth-child(3){
            width: 100%;
            background-image: url('${props=>props.image2}');
        }
    }
    ${props=>props.theme.media.desktop2}{
        flex-direction: row;
        min-height: 250px;
        height: 35%;
        width: 100%;
        margin: unset;
        & > div {
            height: 100%;
            &: nth-child(1){
                width: 25%;
                background-image: url('${props=>props.image1}');
            }
            &: nth-child(2){
                width: 50%;
                background: white;
                & > div{
                    max-width: 550px;
                }
            }
            &: nth-child(3){
                width: 25%;
                background-image: url('${props=>props.image2}');
            }
        }
    }
`

const MainSection = ()=>{
    return(
     <SecondaryMainWraper image1={image1} image2={image2}>
         <div></div>
         <ContentBlock h3Content='ABOUT OUR FURNITURE' content="Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and waht inspires you. Find the furniture pieces tou need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space." />
         <div></div>
     </SecondaryMainWraper>
    )
}

export default MainSection