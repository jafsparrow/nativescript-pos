import { Injectable } from '@angular/core';

import { Product } from './product';
import { LineItem } from './line-item';
import { Order } from './order'
@Injectable()
export class CheckOutService {
    
    lineItems: LineItem[];
  
    constructor() {
      this.lineItems = [];
    }
  

  
    addProductToCart(product: any, quantity: number) {

      console.log(`product name is ${product.name} and quantitiy is ${quantity}`);
      const lineItem: LineItem = Object.assign({}, product);
      lineItem.id = product.id;
      lineItem.quantity = quantity;
      lineItem.totalPrice = product.price * quantity;
      const index = this.lineItems.findIndex( (item) => {
         return item.id === product.id
      });

      if(index > -1) {
        // edit the current item .
        this.lineItems[index].quantity = quantity;
        this.lineItems[index].totalPrice = quantity * product.price;
  
      }else {
        this.lineItems.push(lineItem);
      }

      

      console.log(`the length now is ${this.lineItems.length}`);
      console.log(this.lineItems);
    }
  
    removeProductFromCart(product: any) {
      // const index = this.lineItems.indexOf(product);
      const filteredItems = this.lineItems.filter(item => {
        return item.id !== product.id;
      })
  
      this.lineItems = filteredItems;
    }
  
    changeProdcutQuantity(product: any, newQuantity: number) {
      const lineItem: LineItem = Object.assign({}, product);
      lineItem.quantity = newQuantity;
      lineItem.totalPrice = product.price * newQuantity;
  
      const index = this.lineItems.findIndex( item => {
        return item.product.id === product.id
      });
      Object.assign(this.lineItems[index], lineItem);
  
    }
  
    editProductFromCart(product: any) {
  
    }

    
    getTheCartProductCount(): number {
      return this.lineItems.length;
    }    

    getTheCart() {
      console.log('from service fetching cart item.');
      console.log(this.lineItems);
      return this.lineItems;
    }

//     private orderNumber: number;
//     public orderDetail: Order;
//     public lineItems: Array<LineItem>;
//     constructor() {
//         this.orderNumber = Math.floor(Math.random() * 20);
//         this.lineItems = [];
        
//     }


// addProductToLineItems(product: Product, quantity: number) {
//     let newLineItem: LineItem = this.createNewLineItem(product, quantity);
//     this.addLineItem(newLineItem);
// }

// addLineItem(item: LineItem) {
//     this.lineItems.push(item);
// }


// createNewLineItem(product: Product, quantity: number): LineItem {
//     const total: any = product.price * quantity;
//     let lineItem: LineItem = {
//         id: product.id,
//         quantity: quantity,
//         price: product.price,
//         total: total,
//     }
//     return lineItem;
//   }

//   createOrder(lineItems: Array<LineItem>) {
//     this.orderDetail = new Order(this.orderNumber, this.lineItems);
//     this.orderDetail.total = this.getTotalPrice(lineItems);
//     this.orderDetail.created_at = new Date();
//     this.orderDetail.total_quantity = this.getTotalQuantity(lineItems);
    

//   }

//   getTotalPrice(lineItems: Array<LineItem>): number {
//     let totalPrice = 0; 
//     lineItems.forEach(function(item){
//         totalPrice = totalPrice + item.price;
//     })
//     return totalPrice;
//   }

//     getTotalQuantity(lineItems: Array<LineItem>): number {
//         let totalQuantity = 0; 
//         lineItems.forEach(function(item){
//             totalQuantity = totalQuantity + item.quantity;
//         })
//         return totalQuantity;
//   }
}