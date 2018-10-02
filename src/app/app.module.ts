import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardBoardModule } from './card-board/card-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CardBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
