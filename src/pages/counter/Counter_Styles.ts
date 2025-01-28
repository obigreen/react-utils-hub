import styled from "styled-components";

type PropsType = {
    changeColor: boolean;
}

const Wrapper = styled.div`
    max-width: 300px;
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    padding: 15px;

`
const Board = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin-bottom: 15px;
    border-radius: 12px;
    background-color: #26282c;
`

const Num = styled.div.withConfig(// Используем метод withConfig, чтобы настроить обработку пропсов
    {shouldForwardProp: // shouldForwardProp — функция, которая определяет, какие пропсы НЕ должны передаваться в итоговый DOM-элемент
            (prop) => prop !== 'changeColor',// Указываем, что пропс changeColor не передаётся в DOM
    })<PropsType>`
    font-weight: bold;
    font-size: 50px;
    color: ${(props) => (props.changeColor ? '#910000' : '#28a100')};


    /*
    ПОЯСНЕНИЕ:
    1. \`withConfig\` используется, чтобы удалить лишние пропсы (например, changeColor) из DOM.
       Без этого React выдаст предупреждение в консоли, потому что changeColor не является валидным атрибутом HTML.
    2. \`shouldForwardProp\` — функция, которая говорит, какие пропсы НЕ нужно передавать в DOM. 
       В данном случае мы исключаем changeColor.
    3. <PropsType> — типизация для TS, чтобы TypeScript понимал, какие пропсы ожидает компонент.
*/

`;


const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 12px;
    cursor: pointer;
`


export const S = {
    Wrapper, Board, Num, Buttons, Button
}