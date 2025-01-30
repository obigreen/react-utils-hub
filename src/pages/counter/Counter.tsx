import React, {ChangeEvent, useState} from 'react';
import {S} from "./Counter_Styles"


//todo - Сделать насткройку к счетчику с выбором диапазона, поле максимальные значени и поле минимальное(стартовое)значение
/*поля ввода должны быть валидными не давай возможность ставить -1 или +сколько-то, стоковое
переключение по 1 числу за шаг, при не допустимом значении появляется табличка что значение некорретное
в каунтаре и горит бордер +  дизейблятся все кнопки, после отмены ошибки валидации в поле встает натпись
"сетните новые параметры" типо того, а, кнопки самого счетчкика дизейбл до сета, то есть пока значение не сетнится
то каунтер не активый, только надпить сетни, ну и соотвественно что нельзя что бы и стартовое и макс значение
были равны, причем у него там вообще в таком случае ошибка валидации в 2ух полях ввода сразу*/
//todo - продвинутая версия счетчика
/*в продвинутой верскии у нас в одной оболочке перерисовывается компонент, кнопка сет назодиться в счетчике
и по нажатию перерисовывается табло с настройками, убираются 2 кнопки и появляются поля настроек велью начального и конечного
после выбора значений которые так же валидны опять по кнопке сет сохраняются параметры и нас перекидывает обратно в
счетчик, ну точнее он перерисовывается*/


export const Counter = () => {

    let [maxValue, setMaxValue] = useState<number>(0);
    let [minValue, setMinValue] = useState(0);
    let [count, setCount] = useState<number>(minValue)
    let [error, setError] = useState<string>('');


    const updateMaxState = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = Number(e.currentTarget.value)
        setMaxValue(newMax)

        if (minValue >= maxValue || maxValue > 10) {
            setError("Invalid value")
        } else {
            setError("push set")
        }


    }

    const updateMinState = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = Number(e.currentTarget.value)
        setMinValue(newMin)

        if (minValue >= maxValue || minValue < 0) {
            setError("Invalid value")
        } else {
            setError("push set")
        }

    }


    const validateFunc = () => {
        setCount(count)
    }


    const counter = () => {
        setCount((prevCount) => prevCount + 1)//callback с актуальным состоянием + 1
    }


    const reset = () => {
        if (count > 0) {
            setCount(minValue)
        }
    }


    return (
        <>
            <S.Wrapper>
                <S.Board>
                    <S.BoardWrapper>
                        <S.ValWrapper>
                            <S.ValTitle>Max value :</S.ValTitle>
                            <S.Val
                                style={!!error ? {borderColor: 'red'} : {borderColor: 'white'}}
                                value={maxValue}
                                onChange={updateMaxState}
                                type={"number"}>

                            </S.Val>
                        </S.ValWrapper>
                        <S.ValWrapper>
                            <S.ValTitle>Min value :</S.ValTitle>
                            <S.Val
                                style={!!error ? {borderColor: 'red'} : {borderColor: 'white'}}
                                value={minValue}
                                onChange={updateMinState}
                                type={"number"}>

                            </S.Val>
                        </S.ValWrapper>
                    </S.BoardWrapper>
                </S.Board>
                <S.Buttons>
                    <S.Button onClick={validateFunc}>set</S.Button>
                </S.Buttons>
            </S.Wrapper>

            <S.Wrapper>
                <S.Board>
                    <S.Coun changeColor={maxValue === count}>{count}</S.Coun>
                </S.Board>
                <S.Buttons>
                    <S.Button disabled={count >= maxValue} onClick={counter}>count</S.Button>
                    <S.Button disabled={count === 0} onClick={reset}>reset</S.Button>
                </S.Buttons>
            </S.Wrapper>
        </>
    );
};





