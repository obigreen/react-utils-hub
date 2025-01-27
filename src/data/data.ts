import Picture1 from "../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import Picture2 from "../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import Picture3
    from "../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";

export type AdidasItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const crossArr: AdidasItem[] = [
    {
        id: 1,
        model: 'ADIDAS - SUPER SUPERSKI',
        collection: 'my collection',
        price: 'any $',
        picture: Picture1,

    },
    {
        id: 2,
        model: 'PUMA - ULTRAHYPE 3000',
        collection: 'dude collection',
        price: '420 $',
        picture: Picture2
    },
    {
        id: 3,
        model: 'ABIBAS - SUPERMEGAFOAM TRK',
        collection: 'fuck collection',
        price: 'Доплатим за вывоз в $',
        picture: Picture3
    }
]