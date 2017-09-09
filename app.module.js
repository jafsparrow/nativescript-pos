"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var checkout_service_1 = require("./services/checkout.service");
var product_service_1 = require("./services/product.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var homepage_component_1 = require("./homepage/homepage.component");
var app_modal_1 = require("./modal/app.modal");
var order_sumamary_component_1 = require("./ordersummary/order-sumamary.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_add_component_1 = require("./product-list/product-add/product-add.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            entryComponents: [app_modal_1.ModalComponent],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                app_modal_1.ModalComponent,
                order_sumamary_component_1.OrderSummaryComponent,
                product_list_component_1.ProductListComponent,
                homepage_component_1.HomePageComponent,
                product_add_component_1.ProductAddComponent
            ],
            providers: [
                item_service_1.ItemService,
                modal_dialog_1.ModalDialogService,
                checkout_service_1.CheckOutService,
                product_service_1.ProductService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtFQUF1RTtBQUd2RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCxnRUFBNkQ7QUFDN0QsOERBQTJEO0FBQzNELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFFbkUsb0VBQWlFO0FBQ2pFLCtDQUFtRDtBQUNuRCxvRkFBK0U7QUFDL0UsZ0ZBQTRFO0FBQzVFLDBGQUF1RjtBQVF2RiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFrQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWhDckIsZUFBUSxDQUFDO1lBQ04sZUFBZSxFQUFFLENBQUMsMEJBQWMsQ0FBQztZQUNqQyxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDBCQUFjO2dCQUNkLGdEQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQixzQ0FBaUI7Z0JBQ2pCLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxpQ0FBa0I7Z0JBQ2xCLGtDQUFlO2dCQUNmLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5cblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IENoZWNrT3V0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UnXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSG9tZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudCdcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9hcHAubW9kYWwnO1xuaW1wb3J0IHsgT3JkZXJTdW1tYXJ5Q29tcG9uZW50fSBmcm9tICcuL29yZGVyc3VtbWFyeS9vcmRlci1zdW1hbWFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEFkZENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1saXN0L3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudCc7XG5cblxuXG5cblxuXG4gXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbENvbXBvbmVudF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICAgICAgT3JkZXJTdW1tYXJ5Q29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgSG9tZVBhZ2VDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RBZGRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBDaGVja091dFNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19