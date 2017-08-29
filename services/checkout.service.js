"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_1 = require("./order");
var CheckOutService = (function () {
    function CheckOutService() {
        this.orderNumber = Math.floor(Math.random() * 20);
        this.lineItems = [];
    }
    CheckOutService.prototype.addProductToLineItems = function (product, quantity) {
        var newLineItem = this.createNewLineItem(product, quantity);
        this.addLineItem(newLineItem);
    };
    CheckOutService.prototype.addLineItem = function (item) {
        this.lineItems.push(item);
    };
    CheckOutService.prototype.createNewLineItem = function (product, quantity) {
        var total = product.price * quantity;
        var lineItem = {
            id: product.id,
            quantity: quantity,
            price: product.price,
            total: total,
        };
        return lineItem;
    };
    CheckOutService.prototype.createOrder = function (lineItems) {
        this.orderDetail = new order_1.Order(this.orderNumber, this.lineItems);
        this.orderDetail.total = this.getTotalPrice(lineItems);
        this.orderDetail.created_at = new Date();
        this.orderDetail.total_quantity = this.getTotalQuantity(lineItems);
    };
    CheckOutService.prototype.getTotalPrice = function (lineItems) {
        var totalPrice = 0;
        lineItems.forEach(function (item) {
            totalPrice = totalPrice + item.price;
        });
        return totalPrice;
    };
    CheckOutService.prototype.getTotalQuantity = function (lineItems) {
        var totalQuantity = 0;
        lineItems.forEach(function (item) {
            totalQuantity = totalQuantity + item.quantity;
        });
        return totalQuantity;
    };
    CheckOutService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CheckOutService);
    return CheckOutService;
}());
exports.CheckOutService = CheckOutService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrb3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0MsaUNBQStCO0FBRS9CO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFHTCwrQ0FBcUIsR0FBckIsVUFBc0IsT0FBZ0IsRUFBRSxRQUFnQjtRQUNwRCxJQUFJLFdBQVcsR0FBYSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFjO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCwyQ0FBaUIsR0FBakIsVUFBa0IsT0FBZ0IsRUFBRSxRQUFnQjtRQUNoRCxJQUFNLEtBQUssR0FBUSxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBYTtZQUNyQixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFBO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFNBQTBCO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUdyRSxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLFNBQTBCO1FBQ3RDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtZQUMzQixVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFQywwQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBMEI7UUFDdkMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO1lBQzNCLGFBQWEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQXZEVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQXdEM0I7SUFBRCxzQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCc7XHJcbmltcG9ydCB7IExpbmVJdGVtIH0gZnJvbSAnLi9saW5lLWl0ZW0nO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4vb3JkZXInXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoZWNrT3V0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIG9yZGVyTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3JkZXJEZXRhaWw6IE9yZGVyO1xyXG4gICAgcHVibGljIGxpbmVJdGVtczogQXJyYXk8TGluZUl0ZW0+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlck51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKTtcclxuICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbmFkZFByb2R1Y3RUb0xpbmVJdGVtcyhwcm9kdWN0OiBQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICBsZXQgbmV3TGluZUl0ZW06IExpbmVJdGVtID0gdGhpcy5jcmVhdGVOZXdMaW5lSXRlbShwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICB0aGlzLmFkZExpbmVJdGVtKG5ld0xpbmVJdGVtKTtcclxufVxyXG5cclxuYWRkTGluZUl0ZW0oaXRlbTogTGluZUl0ZW0pIHtcclxuICAgIHRoaXMubGluZUl0ZW1zLnB1c2goaXRlbSk7XHJcbn1cclxuXHJcblxyXG5jcmVhdGVOZXdMaW5lSXRlbShwcm9kdWN0OiBQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyKTogTGluZUl0ZW0ge1xyXG4gICAgY29uc3QgdG90YWw6IGFueSA9IHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eTtcclxuICAgIGxldCBsaW5lSXRlbTogTGluZUl0ZW0gPSB7XHJcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxyXG4gICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxyXG4gICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgIH1cclxuICAgIHJldHVybiBsaW5lSXRlbTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU9yZGVyKGxpbmVJdGVtczogQXJyYXk8TGluZUl0ZW0+KSB7XHJcbiAgICB0aGlzLm9yZGVyRGV0YWlsID0gbmV3IE9yZGVyKHRoaXMub3JkZXJOdW1iZXIsIHRoaXMubGluZUl0ZW1zKTtcclxuICAgIHRoaXMub3JkZXJEZXRhaWwudG90YWwgPSB0aGlzLmdldFRvdGFsUHJpY2UobGluZUl0ZW1zKTtcclxuICAgIHRoaXMub3JkZXJEZXRhaWwuY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLm9yZGVyRGV0YWlsLnRvdGFsX3F1YW50aXR5ID0gdGhpcy5nZXRUb3RhbFF1YW50aXR5KGxpbmVJdGVtcyk7XHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbFByaWNlKGxpbmVJdGVtczogQXJyYXk8TGluZUl0ZW0+KTogbnVtYmVyIHtcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDsgXHJcbiAgICBsaW5lSXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICB0b3RhbFByaWNlID0gdG90YWxQcmljZSArIGl0ZW0ucHJpY2U7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRvdGFsUHJpY2U7XHJcbiAgfVxyXG5cclxuICAgIGdldFRvdGFsUXVhbnRpdHkobGluZUl0ZW1zOiBBcnJheTxMaW5lSXRlbT4pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB0b3RhbFF1YW50aXR5ID0gMDsgXHJcbiAgICAgICAgbGluZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIHRvdGFsUXVhbnRpdHkgPSB0b3RhbFF1YW50aXR5ICsgaXRlbS5xdWFudGl0eTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0b3RhbFF1YW50aXR5O1xyXG4gIH1cclxufSJdfQ==