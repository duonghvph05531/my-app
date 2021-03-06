import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import {HomeComponent} from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    DetailCateComponent,
    HomeComponent,
    EditCateComponent,
    AddCateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }