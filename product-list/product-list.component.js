"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("platform");
var app_modal_1 = require("../modal/app.modal");
var product_service_1 = require("../services/product.service");
var checkout_service_1 = require("../services/checkout.service");
// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     stock: boolean;
// }
var ProductListComponent = (function () {
    function ProductListComponent(modal, vcRef, productService, checkOutService, router, activatedRoute) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.productService = productService;
        this.checkOutService = checkOutService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orderValue = { id: 0,
            itemCount: 0,
            totalPrice: 0 };
        this.order = 0;
        // console.log(this.orderValue);
        // console.log(productService.getProducts());
        this.products = productService.getProducts();
        this.assignCopy();
    }
    ProductListComponent.prototype.assignCopy = function () {
        this.filteredProducts = Object.assign([], this.products);
    };
    ProductListComponent.prototype.filterProducts = function (value) {
        if (!value) {
            this.assignCopy();
        }
        this.filteredProducts = Object.assign([], this.products).filter(function (item) { return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        // console.log(this.filteredProducts.length);
    };
    ProductListComponent.prototype.showModal = function () {
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
    ProductListComponent.prototype.selectQuantity = function (product) {
        var _this = this;
        var quantity = 0;
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            // console.log(res);
            if (res) {
                console.log('this is when it is intergrer');
                _this.checkOutService.addProductToCart(product, res);
                _this.order = _this.checkOutService.getTheCartProductCount();
            }
        });
        // create a line item here for the current product.
    };
    ProductListComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    ProductListComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        this.filterProducts(searchBar.text);
    };
    ProductListComponent.prototype.goToOrderSummary = function () {
        console.log('this is from the tap which should go to ordersumamry');
        // this.router.navigate(['../summary'], { relativeTo: this.activatedRoute }).then(
        //     res => {
        //         console.log('navigatio succesfull');
        //     }
        // );
        this.router.navigate(['/summary']);
    };
    ProductListComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        if (platform_1.isAndroid) {
            searchbar.android.clearFocus();
        }
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "ns-productList",
            moduleId: module.id,
            templateUrl: "./product-list.component.html",
            styles: [
                "\n        .font-awesome {\n            font-family: \"FontAwesome\", fontawesome-webfont;\n            \n        }\n        "
            ]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef,
            product_service_1.ProductService,
            checkout_service_1.CheckOutService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNEQ7QUFDNUQsMENBQTBEO0FBQzFELG1FQUE2RTtBQUU3RSxxQ0FBbUM7QUFFbkMsZ0RBQW1EO0FBR25ELCtEQUE2RDtBQUM3RCxpRUFBK0Q7QUFRL0QsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixJQUFJO0FBZ0JKO0lBU0ksOEJBQTJCLEtBQXlCLEVBQVUsS0FBdUIsRUFDckUsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsTUFBYyxFQUNkLGNBQThCO1FBSm5CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDckUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUnZDLGVBQVUsR0FBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNMLFNBQVMsRUFBRSxDQUFDO1lBQ1osVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFDO1FBTzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0NBQWdDO1FBQ2hDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVDLHlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2Q0FBYyxH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QUM7UUFDakQsRUFBRSxDQUFBLENBQUMsb0JBQVMsQ0FBQyxDQUFBLENBQUM7WUFFVixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBNUdRLG9CQUFvQjtRQWRoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxNQUFNLEVBQUU7Z0JBQ0osOEhBS0M7YUFDSjtTQUNKLENBQUM7eUNBV29DLDRCQUFrQixFQUFpQix1QkFBZ0I7WUFDckQsZ0NBQWM7WUFDYixrQ0FBZTtZQUN4QixlQUFNO1lBQ0UsdUJBQWM7T0FickMsb0JBQW9CLENBK0doQztJQUFELDJCQUFDO0NBQUEsQUEvR0QsSUErR0M7QUEvR1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7aXNBbmRyb2lkfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvYXBwLm1vZGFsJ1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdCc7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrT3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvcmRlckRldGFpbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbUNvdW50OiBudW1iZXI7XHJcbiAgICB0b3RhbFByaWNlOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XHJcbi8vICAgICBpZDogbnVtYmVyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgcHJpY2U6IG51bWJlcjtcclxuLy8gICAgIHN0b2NrOiBib29sZWFuO1xyXG5cclxuLy8gfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1wcm9kdWN0TGlzdFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmZvbnQtYXdlc29tZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCIsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgeyBcclxuICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIHByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PjtcclxuICAgIHB1YmxpYyBmaWx0ZXJlZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PjtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBvcmRlclZhbHVlOiBvcmRlckRldGFpbCA9IHsgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogMH07XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2hlY2tPdXRTZXJ2aWNlOiBDaGVja091dFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCkge1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3JkZXJWYWx1ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKSk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25Db3B5KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgICBhc3NpZ25Db3B5KCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucHJvZHVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlclByb2R1Y3RzKHZhbHVlKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYXNzaWduQ29weSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucHJvZHVjdHMpLmZpbHRlciAoXHJcbiAgICAgIGl0ZW0gPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyICs9IDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLm9yZGVyVmFsdWUuaXRlbUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMub3JkZXJWYWx1ZS50b3RhbFByaWNlID0gdGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UgKyByZXMucHJpY2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3JkZXJWYWx1ZS50b3RhbFByaWNlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZWxlY3RRdWFudGl0eShwcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcclxuICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7J3Byb2R1Y3QnOiBwcm9kdWN0fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHdoZW4gaXQgaXMgaW50ZXJncmVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrT3V0U2VydmljZS5hZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyID0gdGhpcy5jaGVja091dFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgbGluZSBpdGVtIGhlcmUgZm9yIHRoZSBjdXJyZW50IHByb2R1Y3QuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUHJvZHVjdHMoc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9PcmRlclN1bW1hcnkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgZnJvbSB0aGUgdGFwIHdoaWNoIHNob3VsZCBnbyB0byBvcmRlcnN1bWFtcnknKTtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3N1bW1hcnknXSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlIH0pLnRoZW4oXHJcbiAgICAgICAgLy8gICAgIHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbmF2aWdhdGlvIHN1Y2Nlc2Z1bGwnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N1bW1hcnknXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzQkxvYWRlZChhcmdzKXtcclxuICAgICAgICB2YXIgc2VhcmNoYmFyOlNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYoaXNBbmRyb2lkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuIl19