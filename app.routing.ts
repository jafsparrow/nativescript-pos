import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// import { ModalComponent } from './modal/app.modal'
import { OrderSummaryComponent} from './ordersummary/order-sumamary.component';
import { ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
    { path: "", redirectTo: "/products", pathMatch: "full" },
    { path: "products", component: ProductListComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "summary", component: OrderSummaryComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }