import { Component, OnInit } from '@angular/core';
import {CategoryService} from './services/category.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	categories: any[];
	constructor(private cateService: CategoryService){

	}

	ngOnInit() {
        this.cateService.getListCategory()
            .subscribe((data) => {
                this.categories = data;
            });
    }
	removeProduct = (id) => {
        this.categories = this.categories.filter(
            (item) => item.id !== id
        );
    }
	removeSelectedCate(cate) {
        this.cateService.removeCategory(cate)
            .subscribe((data) => {
                console.log('success');
            });
        this.removeProduct(cate.id);
    }

}