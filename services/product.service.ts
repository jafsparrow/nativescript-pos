import { Injectable } from '@angular/core';



import {Product } from './product'

let products: Product[] = [
    {   
        id: 1,
        name: "kiwi super demo",
        price: 20
        
    },
        {   
        id: 2,
        name: "Corneto",
        price: 30
       
    },
        {   
        id: 1,
        name: "Mexicano",
        price: 40
    },
        {   
        id: 1,
        name: "Jafferico",
        price: 100
    },
        {   
        id: 1,
        name: "Baskin Robin",
        price: 100
    }
    ,
        {   
        id: 1,
        name: "HageenDazs",
        price: 100
    },
        {   
        id: 1,
        name: "American Delight",
        price: 100
    },
        {   
        id: 1,
        name: "Kiwi",
        price: 100
    },
        {   
        id: 1,
        name: "Outer Sapce",
        price: 100
    },
        {   
        id: 1,
        name: "Alhmdulillah",
        price: 100
    }
]


@Injectable()
export class ProductService {
    products: Product[];

    constructor() {
        this.products = products;
    }
    getProducts(): Product[]{
        return this.products;
    }
}