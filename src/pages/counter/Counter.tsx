import React, {useState} from 'react';
import {S} from "./Counter_Styles"


export const Counter = () => {


    let [count, setCount] = useState(0)
    const maxValue = 7;

    const isMaxReached = () => {
        if (count >= maxValue) {

        }
    }


    const counter = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const reset = () => {
        if (count > 0) {
            setCount(0)
        }
    }


    return (
        <S.Wrapper>
            <S.Board>
                <S.Num changeColor={maxValue === count}>{count}</S.Num>
            </S.Board>
            <S.Buttons>
                <S.Button disabled={count >= maxValue} onClick={counter}>count</S.Button>
                <S.Button disabled={count === 0} onClick={reset}>reset</S.Button>
            </S.Buttons>
        </S.Wrapper>
    );
};





