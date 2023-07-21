import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {productdata} from '../app/productmodel'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // adding product
  addproduct(data:productdata){
    return this.http.post("http://localhost:3000/product",data)
  }

  //displaying products
  getproduct(){
    return this.http.get<productdata[]>("http://localhost:3000/product")
  }

  //delete product
  deleteproduct(id:number){
    return this.http.delete("http://localhost:3000/product/"+id)
  }
  //update product
  updateproduct(product:productdata,id:number){
    return this.http.put<productdata>("http://localhost:3000/product/"+id,product)

  }
  //on edit product
  getproductbyid(id:string){
    return this.http.get<productdata>("http://localhost:3000/product/"+id)

  }
}
