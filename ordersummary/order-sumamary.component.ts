import { alert } from 'tns-core-modules/ui/dialogs';
import { Component, ViewContainerRef } from "@angular/core";


import { CheckOutService } from '../services/checkout.service';
import { LineItem } from '../services/line-item'

@Component({
    selector: "ns-orderSummary",
    moduleId: module.id,
    templateUrl: "./order-summary.component.html"
})

export class OrderSummaryComponent { 


    public lineItems: Array<LineItem>;

    public constructor(private checkOutService: CheckOutService) {
        this.lineItems = this.checkOutService.getTheCart();
        console.log('the below should be line items.')
        console.log(this.lineItems);
    }

    
    totalPrice() {
        let totalCost = 0;
        this.lineItems.forEach(item => {
            totalCost = totalCost + item.totalPrice;
        });
        return totalCost;
    }

    showAlert() {
        alert('Confirm Order');
    }
}
