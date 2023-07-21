import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  dataid:any;
  public product:productdata={} as productdata;
  
  constructor(private api:ApiService,private activeroute:ActivatedRoute, private router:Router){ }
  ngOnInit(): void{
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id')
      console.log("id is",this.dataid)
    })
    this.api.getproductbyid(this.dataid).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product)
    })

  }
  update(){
    this.api.updateproduct(this.product,this.dataid).subscribe((data:any)=>{
      this.router.navigate(['/view-product']);
    })
  }
}
