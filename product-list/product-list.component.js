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
                "\n       \n        "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNEQ7QUFDNUQsMENBQTBEO0FBQzFELG1FQUE2RTtBQUU3RSxxQ0FBbUM7QUFFbkMsZ0RBQW1EO0FBR25ELCtEQUE2RDtBQUM3RCxpRUFBK0Q7QUFRL0QsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixJQUFJO0FBYUo7SUFTSSw4QkFBMkIsS0FBeUIsRUFBVSxLQUF1QixFQUNyRSxjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxNQUFjLEVBQ2QsY0FBOEI7UUFKbkIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNyRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSdkMsZUFBVSxHQUFnQixFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLENBQUM7WUFDWixVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFPOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV0QixDQUFDO0lBRUMseUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDZDQUFjLEdB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QztRQUNqRCxFQUFFLENBQUEsQ0FBQyxvQkFBUyxDQUFDLENBQUEsQ0FBQztZQUVWLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUE1R1Esb0JBQW9CO1FBWGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLE1BQU0sRUFBRTtnQkFDSixxQkFFQzthQUNKO1NBQ0osQ0FBQzt5Q0FXb0MsNEJBQWtCLEVBQWlCLHVCQUFnQjtZQUNyRCxnQ0FBYztZQUNiLGtDQUFlO1lBQ3hCLGVBQU07WUFDRSx1QkFBYztPQWJyQyxvQkFBb0IsQ0ErR2hDO0lBQUQsMkJBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHtpc0FuZHJvaWR9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC9hcHAubW9kYWwnXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9kdWN0JztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tPdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9yZGVyRGV0YWlsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBpdGVtQ291bnQ6IG51bWJlcjtcclxuICAgIHRvdGFsUHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuLy8gICAgIGlkOiBudW1iZXI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBwcmljZTogbnVtYmVyO1xyXG4vLyAgICAgc3RvY2s6IGJvb2xlYW47XHJcblxyXG4vLyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXByb2R1Y3RMaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCB7IFxyXG4gICAgcHVibGljIG9yZGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcHJvZHVjdHM6IEFycmF5PFByb2R1Y3Q+O1xyXG4gICAgcHVibGljIGZpbHRlcmVkUHJvZHVjdHM6IEFycmF5PFByb2R1Y3Q+O1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG9yZGVyVmFsdWU6IG9yZGVyRGV0YWlsID0geyBpZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiAwfTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjaGVja091dFNlcnZpY2U6IENoZWNrT3V0U2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcmRlclZhbHVlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICB0aGlzLmFzc2lnbkNvcHkoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgIGFzc2lnbkNvcHkoKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wcm9kdWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdHModmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5hc3NpZ25Db3B5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wcm9kdWN0cykuZmlsdGVyIChcclxuICAgICAgaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgIClcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXIgKz0gMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMub3JkZXJWYWx1ZS5pdGVtQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UgPSB0aGlzLm9yZGVyVmFsdWUudG90YWxQcmljZSArIHJlcy5wcmljZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdFF1YW50aXR5KHByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgcXVhbnRpdHkgPSAwO1xyXG4gICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHsncHJvZHVjdCc6IHByb2R1Y3R9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgd2hlbiBpdCBpcyBpbnRlcmdyZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tPdXRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgcmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXIgPSB0aGlzLmNoZWNrT3V0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBsaW5lIGl0ZW0gaGVyZSBmb3IgdGhlIGN1cnJlbnQgcHJvZHVjdC5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJQcm9kdWN0cyhzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub09yZGVyU3VtbWFyeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBmcm9tIHRoZSB0YXAgd2hpY2ggc2hvdWxkIGdvIHRvIG9yZGVyc3VtYW1yeScpO1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vc3VtbWFyeSddLCB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUgfSkudGhlbihcclxuICAgICAgICAvLyAgICAgcmVzID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW8gc3VjY2VzZnVsbCcpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3VtbWFyeSddKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNCTG9hZGVkKGFyZ3Mpe1xyXG4gICAgICAgIHZhciBzZWFyY2hiYXI6U2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VhcmNoYmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iXX0=