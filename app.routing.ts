import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// import { ModalComponent } from './modal/app.modal'
import { HomePageComponent } from './homepage/homepage.component'
import { OrderSummaryComponent} from './ordersummary/order-sumamary.component';
import { ProductListComponent} from './product-list/product-list.component';

import { ProductAddComponent } from './product-list/product-add/product-add.component';


const routes: Routes = [
    { path: "", redirectTo: "/homepage", pathMatch: "full" },
    { path: "homepage", component: HomePageComponent },
    { path: "products", component: ProductListComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "summary", component: OrderSummaryComponent },
    { path: "productadd", component: ProductAddComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }