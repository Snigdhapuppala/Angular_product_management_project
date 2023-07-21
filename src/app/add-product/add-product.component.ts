import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
   
  constructor(private api:ApiService,private router:Router) {}
  ngOnInit(): void{}
adddata(data:productdata){
//console.log(data)
this.api.addproduct(data).subscribe((result)=>{
  console.log(result);
  this.router.navigate(['/view-product'])
})
}
}
