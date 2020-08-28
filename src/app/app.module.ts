import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SortPipe } from './helpers/sort.pipe';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortPipe,
    ItemComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
