import styled from "styled-components";

const HeaderWrapper = styled.header`
    padding: 15px;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1); /* Мягкая тень справа */
`

const NavWrapper = styled.div`
    font-size: 18px;
    margin-bottom: 7px;

    & > a {
        text-decoration: none;
        color: black;

    }

    & > a.active {
        text-decoration: none;
        color: red;
    }
    
`



const LogoWrapper = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: start;
    min-height: 50px;
`

const Logo = styled.h1`
    
`


export const S = {
    HeaderWrapper, NavWrapper, LogoWrapper, Logo
}