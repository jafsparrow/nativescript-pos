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
        id: 3,
        name: "Mexicano",
        price: 40
    },
        {   
        id: 4,
        name: "Jafferico",
        price: 100
    },
        {   
        id: 5,
        name: "Baskin Robin",
        price: 100
    }
    ,
        {   
        id: 6,
        name: "HageenDazs",
        price: 100
    },
        {   
        id: 7,
        name: "American Delight",
        price: 100
    },
        {   
        id: 8,
        name: "Kiwi",
        price: 100
    },
        {   
        id: 9,
        name: "Outer Sapce",
        price: 100
    },
        {   
        id: 10,
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