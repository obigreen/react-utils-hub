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

    let [max, setMax] = useState(0);
    let [min, setMin] = useState(0);
    let [count, setCount] = useState(0);
    const [error, setError] = useState("");


    const validate = (min: number, max: number) => {
        if (min < 0 || min >= max) {
            setError("error")
        } else {
            setError("")
        }
    }


    const maxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxCurrent = Number(e.currentTarget.value)
        setMax(maxCurrent)
        validate(min, maxCurrent)
    }


    const minValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minCurrent = Number(e.currentTarget.value)
        setMin(minCurrent)
        validate(minCurrent, max)
    }

    const counter = () => {
        if (count <= max) {
            setCount((prevCount) => prevCount + 1);
        }
    }

    const reset = () => {
        setCount(min)
    }

    const setting = () => {
        if (!error) {
            setCount(min)
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
                                style={error ? {borderColor: 'red'} : {borderColor: 'white'}}
                                value={max}
                                onChange={maxValue}
                                type={"number"}>
                            </S.Val>
                        </S.ValWrapper>
                        <S.ValWrapper>
                            <S.ValTitle>Min value :</S.ValTitle>
                            <S.Val
                                style={error ? {borderColor: 'red'} : {borderColor: 'white'}}
                                onChange={minValue}
                                value={min}
                                type={"number"}>
                            </S.Val>
                        </S.ValWrapper>
                    </S.BoardWrapper>
                </S.Board>
                <S.Buttons>
                    <S.Button onClick={setting}>set</S.Button>
                </S.Buttons>
            </S.Wrapper>


            <S.Wrapper>
                <S.Board>
                    <S.Coun>
                        {count}
                    </S.Coun>
                </S.Board>
                <S.Buttons>
                    <S.Button disabled={count === max} onClick={counter}>count</S.Button>
                    <S.Button disabled={count === 0} onClick={reset}>reset</S.Button>
                </S.Buttons>
            </S.Wrapper>
        </>
    );
};





