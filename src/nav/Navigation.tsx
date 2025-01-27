import React from 'react';
import {NavLink} from "react-router-dom";
import {crossArr} from "../data/data";
import {S} from "./Navigation_Styles"


export const PATH = {
    PAGE1: "/ADIDAS",
    PAGE2: "/PUMA",
    PAGE3: "/ABIBAS",
} as const

export const Navigation = () => {
    return (
        <S.Nav>
            <S.NavUl>
                {crossArr.map((el, index) => {
                    return (
                        <S.NavLi>
                            <NavLink key={el.id} to={`/${el.id}`}>
                                <S.NavImg src={el.picture}
                                        alt={el.model}/>
                            </NavLink>
                        </S.NavLi>
                    )
                })}
            </S.NavUl>
        </S.Nav>
    );
};





