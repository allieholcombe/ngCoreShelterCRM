
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: []
})
export class SharedModule { }
