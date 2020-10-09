import React from 'react'
import styled from 'styled-components'
import { media } from '../../styleConfig/index'

const Link = styled.a`
    text-decoration:none;
    color: black;
    ${media.mobile}{
        color: white;
    }
`

const navItem = ({content})=>{
    return(
        <Link href="#">{content}</Link>
    )
}


export default navItem