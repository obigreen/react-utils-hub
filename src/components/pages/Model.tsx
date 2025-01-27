import React from 'react';
import {useParams} from "react-router-dom";
import {crossArr} from "./data";


export const Model = () => {


    // const id = Number(params.id);
    // const item = adidasArr.find(adidas => adidas.id === id);
    //
    // if (!item) {
    //     return <div>Model not found</div>;
    // }
    const params = useParams();
    const currentModal = crossArr.find(el => el.id === Number(params.id))


    return (
        <div style={{textAlign: "start", padding: '20px'}}>
            {currentModal
                ?
                <>
                    <h2>{currentModal.model}</h2>
                    <h3>{currentModal.collection}</h3>
                    <h4>{currentModal.price}</h4>
                    <img style={{maxWidth: '300px'}} src={currentModal.picture}
                         alt={currentModal.model}/>
                </>
                : <h2>Нет маны</h2>

            }
        </div>

        //то что было и без проверки
        // <div style={{textAlign: "center"}}>
        //     {adidasArr
        //         ?
        //         <>
        //             <h2>{adidasArr[Number(params.id)].model}</h2>
        //             <h3>{adidasArr[Number(params.id)].collection}</h3>
        //             <h4>{adidasArr[Number(params.id)].price}</h4>
        //             <img src={adidasArr[Number(params.id)].picture}
        //                  alt={adidasArr[Number(params.id)].model}/>
        //         </>
        //         : <Error404/>
        //
        //     }
        // </div>
    );
};

