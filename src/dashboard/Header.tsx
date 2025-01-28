import React from 'react';
import {NavLink} from "react-router-dom";
import {S} from "./Dashboard_Styles"


export const PATH = {
    PAGE1: "/COUNTER",
    PAGE2: "/ORDERTICKETS",
} as const

export const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.LogoWrapper>
                <S.Logo>React utils hub</S.Logo>
            </S.LogoWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE1}>Counter</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE2}>Order tickets</NavLink>
            </S.NavWrapper>
        </S.HeaderWrapper>
    );
};




