import React from 'react';
import {Container} from "./styles/Container";
import {Navigation} from "./nav/Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import {Adidas} from "./pages/Adidas";
import {Puma} from "./pages/Puma";
import {Abibas} from "./pages/Abibas";
import {Error404} from "./pages/Error404";
import {Model} from "./pages/Model";

export const Body = () => {
    return (
        <main>
            <Container>
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/ADIDAS"}/>}/>
                    <Route path={"/ADIDAS"} element={<Adidas/>}/>

                    <Route path={"/PUMA"} element={<Puma/>}/>
                    <Route path={"/ABIBAS"} element={<Abibas/>}/>

                    {/*<Route path={"*"} element={<Navigate to={"/Error404"}/>}/>*/}
                    <Route path={"*"} element={<Error404/>}/>
                    <Route path={"/:id"} element={<Model/>}/>
                </Routes>
            </Container>
        </main>
    );
};

