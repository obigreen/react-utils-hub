import React from 'react';
import styled from "styled-components";

export const DinamicInputLable = () => {
    return (
        <InputWrapper>
            <input type="text" id='name' placeholder="" required/>
            <label htmlFor="name">
                Name
            </label>
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
    position: relative;
    flex: 0 1 400px;

    input {
        border: 1px solid black;
        background: none;
        padding: 15px;
        width: 100%;
        font-size: 20px;
        color: black;
        transition: all 0.3s;
    }

    input:focus {
        outline: none;
        border: 1px solid #02350d;
    }

    label {
        position: absolute;
        top: 49%;
        transform: translate(0, -50%);
        left: 15px;
        color: black;
        font-size: 20px;
        padding: 3px;
        transition: all 0.3s;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        font-size: 16px;
        top: 0;
        background-color: white;
    }
`
