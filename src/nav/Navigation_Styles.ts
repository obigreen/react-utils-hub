import styled from "styled-components";


const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px;
`

const NavUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin: 0;
    cursor: pointer;
`

const NavLi = styled.li`
    a {
        display: flex;
        align-items: center;
        justify-content: center;    
    }

`

const NavImg = styled.img`
    max-width: 50px;

`


export const S = {
    Nav, NavUl, NavLi, NavImg
}