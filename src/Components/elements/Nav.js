import React from 'react'
import NavItem from '../subElements/navItem'
import styled from 'styled-components'
import {ReactComponent as CloseMenu} from '../../asset/icon-close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { closeNavMobile } from '../../actions'

const NavElem = styled.nav`
    max-width: 600px;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: white;
    padding: 0px 20px;
    display: ${props=>props.open === true ? 'flex':'none'};
    ${props=>props.theme.media.mobile}{
        display: flex !important;
        background: inherit;
    }
    & a{
        flex-grow: 1;
        text-align: center;
        cursor: pointer;
    }
    & svg{
        left: unset !important;
        position: relative !important;
        display: unset !important;
        flex-grow: 2;
        ${props=>props.theme.media.mobile}{
            display: none !important;
        }
    }
`

const navItemTab = ['home', 'shop', 'about', 'contact']

const Nav = ()=>{
    const state = useSelector(state=>state)
    const dispatch = useDispatch();
    return(
        <NavElem open={state}>
            <CloseMenu onClick={()=>dispatch(closeNavMobile())}/>
            {navItemTab.map(item=><NavItem key={item} content={item}/>)}
        </NavElem>
    )   
}


export default Nav;