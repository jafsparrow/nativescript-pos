
import { Component, ViewContainerRef } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { SearchBar } from "ui/search-bar";
import {isAndroid} from "platform";

import { ModalComponent } from '../modal/app.modal'
import { Product } from '../services/product';

import { ProductService } from '../services/product.service';
import { CheckOutService } from '../services/checkout.service';

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
    selector: "ns-productList",
    moduleId: module.id,
    templateUrl: "./product-list.component.html",
    styles: [
        `
       
        `
    ]
})

export class ProductListComponent { 
    public order: number;
    public products: Array<Product>;
    public filteredProducts: Array<Product>;
    public searchPhrase: string;
    public orderValue: orderDetail = { id: 0,
                                       itemCount: 0,
                                       totalPrice: 0};

    public constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef,
            private productService: ProductService,
            private checkOutService: CheckOutService,
            private router: Router,
            private activatedRoute: ActivatedRoute,) {
        this.order = 0;
        // console.log(this.orderValue);
        // console.log(productService.getProducts());
        this.products = productService.getProducts();
        this.assignCopy();
        
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
        let quantity = 0;
       let options = {
            context: {'product': product},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalComponent, options).then(res=> {
            // console.log(res);
            if(res){
                console.log('this is when it is intergrer');
                this.checkOutService.addProductToCart(product, res);
                this.order = this.checkOutService.getTheCartProductCount();

            }
            
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

    goToOrderSummary() {
        console.log('this is from the tap which should go to ordersumamry');
        // this.router.navigate(['../summary'], { relativeTo: this.activatedRoute }).then(
        //     res => {
        //         console.log('navigatio succesfull');
        //     }
        // );

        this.router.navigate(['/summary']);

    }

    public sBLoaded(args){
        var searchbar:SearchBar = <SearchBar>args.object;
        if(isAndroid){
            
            searchbar.android.clearFocus();
        }
    }
    

}
