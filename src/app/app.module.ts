import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MtocentPipe, usdtoinrPipe } from './pipe/mtocent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MtocentPipe,
    usdtoinrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
