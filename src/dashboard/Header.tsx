import React from 'react';
import {NavLink} from "react-router-dom";
import {S} from "./Dashboard_Styles"


export const PATH = {
    PAGE1: "/start",
    PAGE2: "/counter",
    PAGE3: "/ordertickets",
    PAGE4: "/dinamicInputLable",
} as const

export const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.LogoWrapper>
                <S.Logo>React utils hub</S.Logo>
            </S.LogoWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE1}>Start page</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE2}>Counter [it-incubator]</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE3}>Order tickets [it-incubator]</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
                <NavLink to={PATH.PAGE4}>Dinamic Lable Input</NavLink>
            </S.NavWrapper>
        </S.HeaderWrapper>
    );
};




