"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("platform");
var app_modal_1 = require("../modal/app.modal");
var product_service_1 = require("../services/product.service");
var checkout_service_1 = require("../services/checkout.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
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
                "\n\n        "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNEQ7QUFDNUQsMENBQTBEO0FBQzFELG1FQUE2RTtBQUU3RSxxQ0FBbUM7QUFFbkMsZ0RBQW1EO0FBR25ELCtEQUE2RDtBQUM3RCxpRUFBK0Q7QUFHL0QsMEVBQXdFO0FBRXhFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQU8vRSw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBRXRCLElBQUk7QUFhSjtJQVNJLDhCQUEyQixLQUF5QixFQUFVLEtBQXVCLEVBQ3JFLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLE1BQWMsRUFDZCxjQUE4QjtRQUpuQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3JFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJ2QyxlQUFVLEdBQWdCLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDTCxTQUFTLEVBQUUsQ0FBQztZQUNaLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQVE5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLGdDQUFnQztRQUNoQyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFQyx5Q0FBVSxHQUFWO1FB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LENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRU0sdUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUF3QixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pELEVBQUUsQ0FBQSxDQUFDLG9CQUFTLENBQUMsQ0FBQSxDQUFDO1lBRVYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQTdHUSxvQkFBb0I7UUFYaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsTUFBTSxFQUFFO2dCQUNKLGNBRUM7YUFDSjtTQUNKLENBQUM7eUNBV29DLDRCQUFrQixFQUFpQix1QkFBZ0I7WUFDckQsZ0NBQWM7WUFDYixrQ0FBZTtZQUN4QixlQUFNO1lBQ0UsdUJBQWM7T0FickMsb0JBQW9CLENBZ0hoQztJQUFELDJCQUFDO0NBQUEsQUFoSEQsSUFnSEM7QUFoSFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7aXNBbmRyb2lkfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvYXBwLm1vZGFsJ1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdCc7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrT3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5leHBvcnQgaW50ZXJmYWNlIG9yZGVyRGV0YWlsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBpdGVtQ291bnQ6IG51bWJlcjtcclxuICAgIHRvdGFsUHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuLy8gICAgIGlkOiBudW1iZXI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBwcmljZTogbnVtYmVyO1xyXG4vLyAgICAgc3RvY2s6IGJvb2xlYW47XHJcblxyXG4vLyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXByb2R1Y3RMaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IHsgXHJcbiAgICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwcm9kdWN0czogQXJyYXk8UHJvZHVjdD47XHJcbiAgICBwdWJsaWMgZmlsdGVyZWRQcm9kdWN0czogQXJyYXk8UHJvZHVjdD47XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb3JkZXJWYWx1ZTogb3JkZXJEZXRhaWwgPSB7IGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6IDB9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcml2YXRlIGNoZWNrT3V0U2VydmljZTogQ2hlY2tPdXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcmRlclZhbHVlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICB0aGlzLmFzc2lnbkNvcHkoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgIGFzc2lnbkNvcHkoKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wcm9kdWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdHModmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5hc3NpZ25Db3B5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wcm9kdWN0cykuZmlsdGVyIChcclxuICAgICAgaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgIClcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXIgKz0gMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMub3JkZXJWYWx1ZS5pdGVtQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UgPSB0aGlzLm9yZGVyVmFsdWUudG90YWxQcmljZSArIHJlcy5wcmljZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdFF1YW50aXR5KHByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgcXVhbnRpdHkgPSAwO1xyXG4gICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHsncHJvZHVjdCc6IHByb2R1Y3R9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgd2hlbiBpdCBpcyBpbnRlcmdyZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tPdXRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgcmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXIgPSB0aGlzLmNoZWNrT3V0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBsaW5lIGl0ZW0gaGVyZSBmb3IgdGhlIGN1cnJlbnQgcHJvZHVjdC5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJQcm9kdWN0cyhzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub09yZGVyU3VtbWFyeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBmcm9tIHRoZSB0YXAgd2hpY2ggc2hvdWxkIGdvIHRvIG9yZGVyc3VtYW1yeScpO1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vc3VtbWFyeSddLCB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUgfSkudGhlbihcclxuICAgICAgICAvLyAgICAgcmVzID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW8gc3VjY2VzZnVsbCcpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3VtbWFyeSddKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNCTG9hZGVkKGFyZ3Mpe1xyXG4gICAgICAgIHZhciBzZWFyY2hiYXI6U2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VhcmNoYmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iXX0=