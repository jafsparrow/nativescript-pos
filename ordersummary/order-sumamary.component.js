"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var core_1 = require("@angular/core");
var checkout_service_1 = require("../services/checkout.service");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(checkOutService) {
        this.checkOutService = checkOutService;
        this.lineItems = this.checkOutService.getTheCart();
        console.log('the below should be line items.');
        console.log(this.lineItems);
    }
    OrderSummaryComponent.prototype.totalPrice = function () {
        var totalCost = 0;
        this.lineItems.forEach(function (item) {
            totalCost = totalCost + item.totalPrice;
        });
        return totalCost;
    };
    OrderSummaryComponent.prototype.showAlert = function () {
        dialogs_1.alert('Confirm Order');
    };
    OrderSummaryComponent = __decorate([
        core_1.Component({
            selector: "ns-orderSummary",
            moduleId: module.id,
            templateUrl: "./order-summary.component.html"
        }),
        __metadata("design:paramtypes", [checkout_service_1.CheckOutService])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtYW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItc3VtYW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQW9EO0FBQ3BELHNDQUE0RDtBQUc1RCxpRUFBK0Q7QUFTL0Q7SUFLSSwrQkFBMkIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELDBDQUFVLEdBQVY7UUFDSSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxlQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXRCUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FPOEMsa0NBQWU7T0FMbEQscUJBQXFCLENBdUJqQztJQUFELDRCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IENoZWNrT3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpbmUtaXRlbSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtb3JkZXJTdW1tYXJ5XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlclN1bW1hcnlDb21wb25lbnQgeyBcclxuXHJcblxyXG4gICAgcHVibGljIGxpbmVJdGVtczogQXJyYXk8TGluZUl0ZW0+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoZWNrT3V0U2VydmljZTogQ2hlY2tPdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXMgPSB0aGlzLmNoZWNrT3V0U2VydmljZS5nZXRUaGVDYXJ0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBiZWxvdyBzaG91bGQgYmUgbGluZSBpdGVtcy4nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsQ29zdCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdG90YWxDb3N0ID0gdG90YWxDb3N0ICsgaXRlbS50b3RhbFByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbENvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FsZXJ0KCkge1xyXG4gICAgICAgIGFsZXJ0KCdDb25maXJtIE9yZGVyJyk7XHJcbiAgICB9XHJcbn1cclxuIl19