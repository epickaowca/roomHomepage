import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    background: black;
    border: none;
    width: 70px;
    height: 60px;
    cursor: pointer;
    ${props=>props.theme.media.desktop2}{
        height: 70px;
    }
    &:hover{
        background:#454545;
    }
`

const arrow = ({click, side})=>{
    return(
        <Button onClick={click}>
            <img alt="sliderHandler" src={require(`../../asset/icon-angle-${side}.svg`)}/>
        </Button>
    )
}

export default arrow