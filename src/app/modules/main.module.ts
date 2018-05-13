import { NgModule } from '@angular/core'
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecodePipe } from '../shared/pipes/converter.pipe';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [FilterPipe, DecodePipe],
    exports: [
        FilterPipe,
        DecodePipe,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MainModule { }