import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../nav/Navigation";
import {S} from "./Dashboard_Styles"

export const Header = () => {
    return (
        <S.HeaderWrapper>

            <S.LogoWrapper>
                <S.Logo>React utils hub</S.Logo>
            </S.LogoWrapper>

            <S.NavWrapper>
                <NavLink to={PATH.PAGE1}>ADIDAS</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE2}>PUMA</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE3}>ABIBAS</NavLink>
            </S.NavWrapper>
        </S.HeaderWrapper>
    );
};




