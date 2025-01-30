import React from 'react';
import samurai from "../assets/img/smaurai.jpg"
import styled from "styled-components";

export const StartPage = () => {
    return (
        <Wrapper>
            <img src={samurai} alt=""/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #000000;
    
    img {
        width: 100%;
        max-width: 400px;
    }
`

