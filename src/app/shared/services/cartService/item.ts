import {Discount} from "./discount";
export interface Item{
    id: string;
    description: string;
    price: number;
    name: string;
    img_src?: string;
    quantity:number;
    discount:Discount
}