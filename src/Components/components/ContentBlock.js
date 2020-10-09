import React from 'react'
import styled from 'styled-components'
import arrow from '../../asset/icon-arrow.svg'

const ContentElem = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px;
    & > div{
        max-width: 300px;
        ${props=>props.theme.media.mobile}{
            max-width: 400px;
        }
        ${props=>props.theme.media.desktop3}{
            max-width: 550px;
        }
        & > h1{
            font-size: 1.5rem;
            ${props=>props.theme.media.mobile}{
                font-size: 2rem;
            }
            ${props=>props.theme.media.desktop3}{
                font-size: 3rem;
            }
        }
        & > p {
            margin: 25px 0;
        }
        & > div{
            cursor: pointer;
            & > div{
                background-image: url(${props=>props.imgArrow});
                background-repeat: no-repeat;
                width: 40px;
                height: 30px;
                margin-left: 25px;
            }
        }
    }
    `

const ContentBlock = ({content, h1Content, h3Content, shopNow})=>{
    return(
        <ContentElem imgArrow = {arrow}>
            <div>
                {h1Content && <h1>{h1Content}</h1>}
                {h3Content && <h3>{h3Content}</h3>}
                <p>{content}</p>
                {shopNow && 
                <div>
                    <p>SHOP NOW</p>
                    <div></div>
                </div>
                }
                
            </div>
        </ContentElem>
    )
}

export default ContentBlock