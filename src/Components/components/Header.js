import React from 'react'
import styled from 'styled-components'
import Nav from '../elements/Nav'
import {ReactComponent as HamburgerIco} from '../../asset/icon-hamburger.svg'
import { useSelector, useDispatch } from 'react-redux'
import { openNavMobile } from '../../actions'

const HeaderElem = styled.header`
    z-index: 2;
    width: 100%;
    position: absolute;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props=>props.theme.media.mobile}{
        justify-content: flex-start;
    }
    & p{
        font-size: 1.5rem;
        color: white;
        font-weight: bold;
        display: ${props=>props.open === true ? 'none':'block'};
        ${props=>props.theme.media.mobile}{
            display: block !important;
            margin: 0px 50px;
        }
    }
    & svg{
        cursor: pointer;
        position: absolute;
        left: 20px;
        display: ${props=>props.open === true ? 'none':'block'};
        ${props=>props.theme.media.mobile}{
            display: none;
        }
    }
`

const Header = ()=>{
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <HeaderElem open={state}>
            <HamburgerIco onClick={()=>dispatch(openNavMobile())} />
            <p>room</p>
            <Nav />
        </HeaderElem>
    )   
}


export default Header;