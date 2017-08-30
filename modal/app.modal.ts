import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
 
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: boolean;

}
@Component({
    selector: "my-modal",
    moduleId: module.id,
    templateUrl: "app.modal.html",
    styleUrls: ['app.modal.css']
})
export class ModalComponent {
 

    public products: Array<Product>;

    public selectedProdcut: any;
 
    public constructor(private params: ModalDialogParams) {
        this.selectedProdcut = this.params.context.product;
        console.log(this.selectedProdcut.price);



        this.products = [
            {   
                id: 1,
                name: "kiwi super demo",
                price: 20,
                stock: true
            },
             {   
                id: 2,
                name: "Corneto",
                price: 30,
                stock: true
            },
             {   
                id: 1,
                name: "Mexicano",
                price: 40,
                stock: true
            }
        ]
    }
 
    public close(res: string) {
        this.params.closeCallback(res);
    }


    public sendToOrder(product: Product){
        // console.log(product);
        this.params.closeCallback(product);
    }

    printTextValue(value) {
        // console.log(value);
        this.params.closeCallback(value);
    }

 
}