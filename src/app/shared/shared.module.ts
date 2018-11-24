import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RattingComponent } from "./ratting/ratting.component";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RattingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RattingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }