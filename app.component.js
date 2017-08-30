"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var app_modal_1 = require("./modal/app.modal");
var product_service_1 = require("./services/product.service");
var checkout_service_1 = require("./services/checkout.service");
// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     stock: boolean;
// }
var AppComponent = (function () {
    function AppComponent(modal, vcRef, productService, checkOutService) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.productService = productService;
        this.checkOutService = checkOutService;
        this.orderValue = { id: 0,
            itemCount: 0,
            totalPrice: 0 };
        this.order = 0;
        // console.log(this.orderValue);
        // console.log(productService.getProducts());
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
    AppComponent.prototype.assignCopy = function () {
        this.filteredProducts = Object.assign([], this.products);
    };
    AppComponent.prototype.filterProducts = function (value) {
        if (!value) {
            this.assignCopy();
        }
        this.filteredProducts = Object.assign([], this.products).filter(function (item) { return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        // console.log(this.filteredProducts.length);
    };
    AppComponent.prototype.showModal = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            _this.order += 1;
            // this.orderValue.itemCount += 1;
            // this.orderValue.totalPrice = this.orderValue.totalPrice + res.price;
            // console.log(this.orderValue.totalPrice);
        });
    };
    AppComponent.prototype.selectQuantity = function (product) {
        var _this = this;
        var quantity = 0;
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            console.log(res);
            quantity = res;
            _this.checkOutService.addProductToCart(product, res);
            _this.order = _this.checkOutService.getTheCartProductCount();
        });
        // create a line item here for the current product.
    };
    AppComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    AppComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        this.filterProducts(searchBar.text);
    };
    AppComponent.prototype.goToOrderSummary = function () {
        console.log('this is from the tap which should go to ordersumamry');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef,
            product_service_1.ProductService,
            checkout_service_1.CheckOutService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNEQ7QUFDNUQsbUVBQTZFO0FBRzdFLCtDQUFrRDtBQUdsRCw4REFBNEQ7QUFDNUQsZ0VBQThEO0FBUTlELDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFdEIsSUFBSTtBQU9KO0lBU0ksc0JBQTJCLEtBQXlCLEVBQVUsS0FBdUIsRUFDckUsY0FBOEIsRUFDOUIsZUFBZ0M7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNyRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTnpDLGVBQVUsR0FBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNMLFNBQVMsRUFBRSxDQUFDO1lBQ1osVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFDO1FBSzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0NBQWdDO1FBQ2hDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLFNBQVM7UUFDVCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBRUMsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FB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eEI7SUFBRCxtQkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcblxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL2FwcC5tb2RhbCdcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrT3V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2Ugb3JkZXJEZXRhaWwge1xuICAgIGlkOiBudW1iZXI7XG4gICAgaXRlbUNvdW50OiBudW1iZXI7XG4gICAgdG90YWxQcmljZTogbnVtYmVyO1xufVxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xuLy8gICAgIGlkOiBudW1iZXI7XG4vLyAgICAgbmFtZTogc3RyaW5nO1xuLy8gICAgIHByaWNlOiBudW1iZXI7XG4vLyAgICAgc3RvY2s6IGJvb2xlYW47XG5cbi8vIH1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgcHVibGljIG9yZGVyOiBudW1iZXI7XG4gICAgcHVibGljIHByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PjtcbiAgICBwdWJsaWMgZmlsdGVyZWRQcm9kdWN0czogQXJyYXk8UHJvZHVjdD47XG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuICAgIHB1YmxpYyBvcmRlclZhbHVlOiBvcmRlckRldGFpbCA9IHsgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiAwfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgIHByaXZhdGUgY2hlY2tPdXRTZXJ2aWNlOiBDaGVja091dFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3JkZXJWYWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5hc3NpZ25Db3B5KCk7XG4gICAgICAgIC8vIHRoaXMucHJvZHVjdHMgPSBbXG4gICAgICAgIC8vICAgICB7ICAgXG4gICAgICAgIC8vICAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8vICAgICAgICAgbmFtZTogXCJraXdpIHN1cGVyIGRlbW9cIixcbiAgICAgICAgLy8gICAgICAgICBwcmljZTogMjBcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICAgeyAgIFxuICAgICAgICAvLyAgICAgICAgIGlkOiAyLFxuICAgICAgICAvLyAgICAgICAgIG5hbWU6IFwiQ29ybmV0b1wiLFxuICAgICAgICAvLyAgICAgICAgIHByaWNlOiAzMFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgICB7ICAgXG4gICAgICAgIC8vICAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8vICAgICAgICAgbmFtZTogXCJNZXhpY2Fub1wiLFxuICAgICAgICAvLyAgICAgICAgIHByaWNlOiA0MFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyBdXG4gICAgfVxuXG4gICAgICBhc3NpZ25Db3B5KCkge1xuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnByb2R1Y3RzKTtcbiAgICB9XG5cbiAgICBmaWx0ZXJQcm9kdWN0cyh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuYXNzaWduQ29weSgpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucHJvZHVjdHMpLmZpbHRlciAoXG4gICAgICBpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMVxuICAgIClcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGgpO1xuICB9XG5cbiAgICBwdWJsaWMgc2hvd01vZGFsKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcz0+IHtcbiAgICAgICAgICAgIHRoaXMub3JkZXIgKz0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5vcmRlclZhbHVlLml0ZW1Db3VudCArPSAxO1xuICAgICAgICAgICAgLy8gdGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UgPSB0aGlzLm9yZGVyVmFsdWUudG90YWxQcmljZSArIHJlcy5wcmljZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3JkZXJWYWx1ZS50b3RhbFByaWNlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHNlbGVjdFF1YW50aXR5KHByb2R1Y3QpIHtcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcbiAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsncHJvZHVjdCc6IHByb2R1Y3R9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcz0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBxdWFudGl0eSA9cmVzO1xuICAgICAgICAgICAgdGhpcy5jaGVja091dFNlcnZpY2UuYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0LCByZXMpO1xuICAgICAgICAgICAgdGhpcy5vcmRlciA9IHRoaXMuY2hlY2tPdXRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbGluZSBpdGVtIGhlcmUgZm9yIHRoZSBjdXJyZW50IHByb2R1Y3QuXG5cbiAgICB9XG5cblxuXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgdGhpcy5maWx0ZXJQcm9kdWN0cyhzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdvVG9PcmRlclN1bW1hcnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGZyb20gdGhlIHRhcCB3aGljaCBzaG91bGQgZ28gdG8gb3JkZXJzdW1hbXJ5Jyk7XG4gICAgfVxuICAgIFxuXG59XG4iXX0=