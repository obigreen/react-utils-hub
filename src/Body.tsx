import React from 'react';
import {Container} from "./styles/Container";
import {Navigate, Route, Routes} from "react-router-dom";
import {Counter} from "./pages/counter/Counter";
import {Error404} from "./pages/Error404";
import {Navigation} from "./nav/Navigation";
import styled from "styled-components";
import {OrderTickets} from "./pages/order-tickets/OrderTickets";


export const Body = () => {
    return (
        <main>
            <Container>
                <Navigation/>
                <RouteWrapper>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/COUNTER"}/>}/>
                        <Route path={"/COUNTER"} element={<Counter/>}/>
                        <Route path={"/ORDERTICKETS"} element={<OrderTickets/>}/>
                        {/*<Route path={"*"} element={<Navigate to={"/Error404"}/>}/>*/}
                        <Route path={"*"} element={<Error404/>}/>
                        {/*<Route path={"/:id"} element={<Model/>}/>*/}
                    </Routes>
                </RouteWrapper>
            </Container>
        </main>
    );
};


const RouteWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 50px;
`
