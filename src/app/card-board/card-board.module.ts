import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [
        CardComponent, // delete this after done playing around
    ]
})
export class CardBoardModule { }
