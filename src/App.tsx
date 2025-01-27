import React from 'react';
import styled from "styled-components";
import {Header} from "./dashboard/Header";
import {Body} from "./Body";


function App() {
    return (
        <GridWrapper>
            <Header/>
            <Body/>
        </GridWrapper>
    );
}


const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    height: 100vh;

`


export default App;
