import React from 'react';
import styles from "./components/Site.module.css";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Adidas} from "./components/pages/Adidas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";
import {Model} from "./components/pages/Model";
import {crossArr} from "./components/pages/data";


export const PATH = {
    PAGE1: "/ADIDAS",
    PAGE2: "/PUMA",
    PAGE3: "/ABIBAS",
} as const


function App() {
    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE1}>ADIDAS</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE2}>PUMA</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE3}>ABIBAS</NavLink>
                    </NavWrapper>

                </div>
                <div className={styles.content}>
                    <div>
                        <div style={{display: "flex", justifyContent: "start"}}>
                            {crossArr.map((el, index) => {
                                return (
                                    <div>
                                        <NavLink key={el.id} to={`/${el.id}`}>
                                            <img src={el.picture}
                                                 alt={el.model}
                                                 style={{maxWidth: "100px", marginLeft: "20px", marginTop: "20px"}}/>
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/ADIDAS"}/>}/>
                        <Route path={"/ADIDAS"} element={<Adidas/>}/>

                        <Route path={"/PUMA"} element={<Puma/>}/>
                        <Route path={"/ABIBAS"} element={<Abibas/>}/>

                        {/*<Route path={"*"} element={<Navigate to={"/Error404"}/>}/>*/}
                        <Route path={"*"} element={<Error404/>}/>
                        <Route path={"/:id"} element={<Model/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

const NavWrapper = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    
    & > a {
        text-decoration: none;

    }

    & > a.active {
        text-decoration: none;
        color: red;
    }

    & > a.hover {
        color: steelblue;
    }
`


export default App;
