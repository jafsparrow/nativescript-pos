import { Injectable } from '@angular/core';

import { Product } from './product';
import { LineItem } from './line-item';
import { Order } from './order'
@Injectable()
export class CheckOutService {
    private orderNumber: number;
    public orderDetail: Order;
    public lineItems: Array<LineItem>;
    constructor() {
        this.orderNumber = Math.floor(Math.random() * 20);
        this.lineItems = [];
        
    }


addProductToLineItems(product: Product, quantity: number) {
    let newLineItem: LineItem = this.createNewLineItem(product, quantity);
    this.addLineItem(newLineItem);
}

addLineItem(item: LineItem) {
    this.lineItems.push(item);
}


createNewLineItem(product: Product, quantity: number): LineItem {
    const total: any = product.price * quantity;
    let lineItem: LineItem = {
        id: product.id,
        quantity: quantity,
        price: product.price,
        total: total,
    }
    return lineItem;
  }

  createOrder(lineItems: Array<LineItem>) {
    this.orderDetail = new Order(this.orderNumber, this.lineItems);
    this.orderDetail.total = this.getTotalPrice(lineItems);
    this.orderDetail.created_at = new Date();
    this.orderDetail.total_quantity = this.getTotalQuantity(lineItems);
    

  }

  getTotalPrice(lineItems: Array<LineItem>): number {
    let totalPrice = 0; 
    lineItems.forEach(function(item){
        totalPrice = totalPrice + item.price;
    })
    return totalPrice;
  }

    getTotalQuantity(lineItems: Array<LineItem>): number {
        let totalQuantity = 0; 
        lineItems.forEach(function(item){
            totalQuantity = totalQuantity + item.quantity;
        })
        return totalQuantity;
  }
}