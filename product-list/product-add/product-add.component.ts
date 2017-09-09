import { Component } from '@angular/core';


@Component({
    selector: 'product-add',
    template: `

    <ActionBar title="Customer Add">

        <ActionItem class="action-item">
            <Label text="order22" class="Action h2"></Label>
        </ActionItem>      
        <ActionItem class="action-item" >
            <Label class="font-awesome h2 Action" text="&#xf217;" style="color: purple;" (tap)="openSearchBar()"></Label>
        </ActionItem>
    </ActionBar>


    <StackLayout class="form">
    
      <!-- Option 1: An input with no label, and a bottom border -->
      <StackLayout class="input-field">
        <TextField hint="Option 1" class="input"> </TextField>
        <StackLayout class="hr-light"></StackLayout>
      </StackLayout>
    
      <!-- Option 2: An input with a label on top, and a bottom border -->
      <StackLayout class="input-field">
        <Label text="Option 2" class="label font-weight-bold m-b-5"></Label>
        <TextField class="input"> </TextField>
        <StackLayout class="hr-light"></StackLayout>
      </StackLayout>
    
      <!-- Option 3: An label and input—positioned side by side -->
      <GridLayout class="input-field input-sides" rows="auto, auto" columns="80,*">
        <Label text="Option 3" class="label font-weight-bold" row="0" col="0"></Label>
        <TextField class="input right input-border" row="0" col="1" > </TextField>
        <StackLayout class="hr-light" row="1" colSpan="2"></StackLayout>
      </GridLayout>-
    
      <!-- Option 4: An input with a simple border and no label -->
      <TextField hint="Option 4" class="input input-border" > </TextField>
    
      
      <TextField hint="Input rounded" class="input input-rounded" > </TextField>
    
    </StackLayout>
    

    `,
    styles: [`

    .fab-button {
        height: 70;
        width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles 
        margin: 15;
        background-color: #ff4081; 
        horizontal-align: right; 
        vertical-align: bottom; 
    }
    
    `]
})

export class ProductAddComponent {}