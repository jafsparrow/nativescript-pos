
import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { SearchBar } from "ui/search-bar";

import { ModalComponent } from './modal/app.modal'
import { Product } from './services/product';

import { ProductService } from './services/product.service';

export interface orderDetail {
    id: number;
    itemCount: number;
    totalPrice: number;
}

// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     stock: boolean;

// }

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    public order: number;
    public products: Array<Product>;
    public filteredProducts: Array<Product>;
    public searchPhrase: string;
    public orderValue: orderDetail = { id: 0,
                                       itemCount: 0,
                                       totalPrice: 0};

    public constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef,
            private productService: ProductService) {
        this.order = 0;
        console.log(this.orderValue);
        console.log(productService.getProducts());
        this.products = productService.getProducts();
        this.assignCopy();
        // this.products = [
        //     {   
        //         id: 1,
        //         name: "kiwi super demo",
        //         price: 20
        //     },
        //      {   
        //         id: 2,
        //         name: "Corneto",
        //         price: 30
        //     },
        //      {   
        //         id: 1,
        //         name: "Mexicano",
        //         price: 40
        //     }
        // ]
    }

      assignCopy() {
        this.filteredProducts = Object.assign([], this.products);
    }

    filterProducts(value) {
    if (!value) {
      this.assignCopy();
    }

    this.filteredProducts = Object.assign([], this.products).filter (
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )

    // console.log(this.filteredProducts.length);
  }

    public showModal() {
        let options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalComponent, options).then(res=> {
            this.order += 1;
            // this.orderValue.itemCount += 1;
            // this.orderValue.totalPrice = this.orderValue.totalPrice + res.price;
            // console.log(this.orderValue.totalPrice);
        })
    }


    selectQuantity(product) {
       let options = {
            context: {'product': product},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalComponent, options).then(res=> {
            this.order += 1;
            console.log(res);
            // this.orderValue.itemCount += 1;
            // this.orderValue.totalPrice = this.orderValue.totalPrice + res.price;
            // console.log(this.orderValue.totalPrice);
        });

        // create a line item here for the current product.
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        this.filterProducts(searchBar.text);
        
    }

}
