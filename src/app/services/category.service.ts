import { Injectable } from '@angular/core';
import { HttpClient, 
			HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://5d3193014901b4001401a03c.mockapi.io/categories/";
  constructor(private http: HttpClient) { 

  }

  public getListCategory(){
  	return this.http.get<any[]>(this.apiUrl);
  }
  public removeCategory(cateId){
  	let removeUrl = `${this.apiUrl}/${cateId}`;
  	return this.http.delete<any>(removeUrl);
  }
  public addCategory(data){
    return this.http.post<any>(this.apiUrl, data);
  }
  public editCategory(cate){
    return this.http.put<any[]>(this.apiUrl+cate.id,cate);
  }
}

