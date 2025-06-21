import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products=[
  //   {"id": 1,"name":"Computer" , price:7000, selected:true},
  //   {"id": 2,"name":"Printer" , price:1500, selected:false},
  //   {"id": 3,"name":"Smart Phone" , price:2500, selected:true},
  // ]
  constructor(private http: HttpClient) { }

  getAllProduct(){
    // return this.products;
    return this.http.get("http://localhost:8081/products")
  }

  deleteProduct(product : any){
    // this.products=this.products.filter((p:any)=>p.id != product.id)
    return this.http.delete("http://localhost:8081/products/"+product.id)
  }
}

