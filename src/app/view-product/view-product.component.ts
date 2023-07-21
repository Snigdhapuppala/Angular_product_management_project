import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  product:undefined|productdata[];
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.getproduct();
  }
 getproduct(){
  this.api.getproduct().subscribe(res=>{
  this.product = res;
  console.log(res)
  })
 }
 //delete 
 deleteproduct(id:number){
  if(confirm('Are you sure delete it'))
 this.api.deleteproduct(id).subscribe((res)=>{

 })
 this.getproduct();
 }
}
