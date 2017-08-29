"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var app_modal_1 = require("./modal/app.modal");
var product_service_1 = require("./services/product.service");
// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     stock: boolean;
// }
var AppComponent = (function () {
    function AppComponent(modal, vcRef, productService) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.productService = productService;
        this.orderValue = { id: 0,
            itemCount: 0,
            totalPrice: 0 };
        this.order = 0;
        console.log(this.orderValue);
        console.log(productService.getProducts());
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
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            _this.order += 1;
            console.log(res);
            // this.orderValue.itemCount += 1;
            // this.orderValue.totalPrice = this.orderValue.totalPrice + res.price;
            // console.log(this.orderValue.totalPrice);
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
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef,
            product_service_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNEQ7QUFDNUQsbUVBQTZFO0FBRzdFLCtDQUFrRDtBQUdsRCw4REFBNEQ7QUFRNUQsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixJQUFJO0FBT0o7SUFTSSxzQkFBMkIsS0FBeUIsRUFBVSxLQUF1QixFQUNyRSxjQUE4QjtRQURuQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3JFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx2QyxlQUFVLEdBQWdCLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDTCxTQUFTLEVBQUUsQ0FBQztZQUNaLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUk5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLG1DQUFtQztRQUNuQyxvQkFBb0I7UUFDcEIsU0FBUztRQUNULFlBQVk7UUFDWixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQUVDLGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsS0FBSztRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUM3RCxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF6RCxDQUF5RCxDQUNsRSxDQUFBO1FBRUQsNkNBQTZDO0lBQy9DLENBQUM7SUFFUSxnQ0FBUyxHQUFoQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEQsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDaEIsa0NBQWtDO1lBQ2xDLHVFQUF1RTtZQUN2RSwyQ0FBMkM7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QscUNBQWMsR0FBZCxVQUFlLE9BQU87UUFBdEIsaUJBZUM7UUFkRSxJQUFJLE9BQU8sR0FBRztZQUNULE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDN0IsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDBCQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsRCxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLGtDQUFrQztZQUNsQyx1RUFBdUU7WUFDdkUsMkNBQTJDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsbURBQW1EO0lBQ3ZELENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQTdGUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBV29DLDRCQUFrQixFQUFpQix1QkFBZ0I7WUFDckQsZ0NBQWM7T0FWckMsWUFBWSxDQStGeEI7SUFBRCxtQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcblxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL2FwcC5tb2RhbCdcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBvcmRlckRldGFpbCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpdGVtQ291bnQ6IG51bWJlcjtcbiAgICB0b3RhbFByaWNlOiBudW1iZXI7XG59XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XG4vLyAgICAgaWQ6IG51bWJlcjtcbi8vICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgcHJpY2U6IG51bWJlcjtcbi8vICAgICBzdG9jazogYm9vbGVhbjtcblxuLy8gfVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcbiAgICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvZHVjdHM6IEFycmF5PFByb2R1Y3Q+O1xuICAgIHB1YmxpYyBmaWx0ZXJlZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PjtcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gICAgcHVibGljIG9yZGVyVmFsdWU6IG9yZGVyRGV0YWlsID0geyBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6IDB9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVyVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuYXNzaWduQ29weSgpO1xuICAgICAgICAvLyB0aGlzLnByb2R1Y3RzID0gW1xuICAgICAgICAvLyAgICAgeyAgIFxuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxuICAgICAgICAvLyAgICAgICAgIG5hbWU6IFwia2l3aSBzdXBlciBkZW1vXCIsXG4gICAgICAgIC8vICAgICAgICAgcHJpY2U6IDIwXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgIHsgICBcbiAgICAgICAgLy8gICAgICAgICBpZDogMixcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiBcIkNvcm5ldG9cIixcbiAgICAgICAgLy8gICAgICAgICBwcmljZTogMzBcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICAgeyAgIFxuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxuICAgICAgICAvLyAgICAgICAgIG5hbWU6IFwiTWV4aWNhbm9cIixcbiAgICAgICAgLy8gICAgICAgICBwcmljZTogNDBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gXVxuICAgIH1cblxuICAgICAgYXNzaWduQ29weSgpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgZmlsdGVyUHJvZHVjdHModmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmFzc2lnbkNvcHkoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnByb2R1Y3RzKS5maWx0ZXIgKFxuICAgICAgaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTFcbiAgICApXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKTtcbiAgfVxuXG4gICAgcHVibGljIHNob3dNb2RhbCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXM9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyICs9IDE7XG4gICAgICAgICAgICAvLyB0aGlzLm9yZGVyVmFsdWUuaXRlbUNvdW50ICs9IDE7XG4gICAgICAgICAgICAvLyB0aGlzLm9yZGVyVmFsdWUudG90YWxQcmljZSA9IHRoaXMub3JkZXJWYWx1ZS50b3RhbFByaWNlICsgcmVzLnByaWNlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgc2VsZWN0UXVhbnRpdHkocHJvZHVjdCkge1xuICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeydwcm9kdWN0JzogcHJvZHVjdH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xuICAgICAgICAgICAgdGhpcy5vcmRlciArPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIC8vIHRoaXMub3JkZXJWYWx1ZS5pdGVtQ291bnQgKz0gMTtcbiAgICAgICAgICAgIC8vIHRoaXMub3JkZXJWYWx1ZS50b3RhbFByaWNlID0gdGhpcy5vcmRlclZhbHVlLnRvdGFsUHJpY2UgKyByZXMucHJpY2U7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9yZGVyVmFsdWUudG90YWxQcmljZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGxpbmUgaXRlbSBoZXJlIGZvciB0aGUgY3VycmVudCBwcm9kdWN0LlxuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHRoaXMuZmlsdGVyUHJvZHVjdHMoc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICBcbiAgICB9XG5cbn1cbiJdfQ==