import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  constructor(private cateService:CategoryService, private router:Router, private route:ActivatedRoute) {

   }
   category={
     name:"",
     image:""
   };
   id='0';

  ngOnInit() {
   this.id=this.route.snapshot.params.id;
   this.cateService.getListCategory().subscribe(data=>{
    this.category=data.find(
      (item)=>item.id===this.id
    );
   });
  }
  saveCategory(){
  	this.cateService.editCategory(this.category)
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
