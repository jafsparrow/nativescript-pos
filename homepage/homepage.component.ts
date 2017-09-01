
import { Component } from '@angular/core';

import { Page } from 'ui/page';

@Component({
    selector: 'home-page',
    template: `
    <GridLayout rows="*,*,*" class="landing-container">
    <GridLayout row="0" class="nav-container m-b-5">
        <GridLayout class="nav-item font-awesome">
            <Label text="&#xf2bc; Customers" 
                class="nav-item-text font-awesome"
                ></Label>

            
        </GridLayout>
    </GridLayout>
    
    
    <GridLayout row="1" class="nav-container m-b-5">
        <GridLayout class="nav-item">
            <Label text="&#xf290; Products" 
                class="nav-item-text font-awesome"
                [nsRouterLink]="['/products']"></Label>
        </GridLayout>
    </GridLayout>

    <GridLayout row="2" class="nav-container">
        <GridLayout class="nav-item">
            <Label text="&#xf1c1; Orders" 
                class="nav-item-text font-awesome"></Label>
        </GridLayout>
    </GridLayout>

</GridLayout>
    `,
    styles: [
        `
       
        .nav-item {
            background-color: purple;
            color: white;
            font-size: 43;
           
        }
        .nav-item-text {
            horizontal-align: center;
            vertical-align: center;
           
        }

        
        
        `
    ]
})

export class HomePageComponent {
    constructor(page: Page) {
        page.actionBarHidden = true;
    }

}