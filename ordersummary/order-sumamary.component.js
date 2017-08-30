"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var checkout_service_1 = require("../services/checkout.service");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(checkOutService) {
        this.checkOutService = checkOutService;
        this.lineItems = this.checkOutService.getTheCart();
        console.log('this is from summary page');
    }
    OrderSummaryComponent = __decorate([
        core_1.Component({
            selector: "ns-orderSummary",
            moduleId: module.id,
            templateUrl: "order-summary.component.html"
        }),
        __metadata("design:paramtypes", [checkout_service_1.CheckOutService])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtYW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItc3VtYW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBRzVELGlFQUErRDtBQVMvRDtJQUtJLCtCQUEyQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBUlEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBTzhDLGtDQUFlO09BTGxELHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBDaGVja091dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGluZUl0ZW0gfSBmcm9tICcuLi9zZXJ2aWNlcy9saW5lLWl0ZW0nXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW9yZGVyU3VtbWFyeVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIm9yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyU3VtbWFyeUNvbXBvbmVudCB7IFxyXG5cclxuXHJcbiAgICBwdWJsaWMgbGluZUl0ZW1zOiBBcnJheTxMaW5lSXRlbT47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tPdXRTZXJ2aWNlOiBDaGVja091dFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IHRoaXMuY2hlY2tPdXRTZXJ2aWNlLmdldFRoZUNhcnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBmcm9tIHN1bW1hcnkgcGFnZScpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG4iXX0=