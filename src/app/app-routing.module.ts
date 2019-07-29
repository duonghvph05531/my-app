import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailCateComponent} from './screens/detail-cate/detail-cate.component';
import { HomeComponent } from './screens/home/home.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';

const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"detail/:id",
        component:DetailCateComponent
    },
    {
        path:"category-edit/:id",
        component:EditCateComponent
    },
    {
        path:"category-add",
        component:AddCateComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 

}