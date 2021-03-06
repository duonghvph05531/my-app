import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor(private cateService:CategoryService,
                      private router:Router) { }

  category = {
    name:"",
    image:""
  }

  ngOnInit() {
  }
  saveCategory(){
  	this.cateService.addCategory(this.category)
  					.subscribe(data => {
  						console.log(data);
  						this.category = {
  							name: "",
  							image: ""
  						}
  						this.router.navigate(['/']);
  					});
  }

}
