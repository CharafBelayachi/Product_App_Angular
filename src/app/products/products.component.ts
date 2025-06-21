import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf, NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit{
  products!: any
  constructor(private productService :ProductService) {
  }
  ngOnInit() {
    this.getAllProduct()
  }

  getAllProduct(){
    // this.products = this.productService.getAllProduct();
    this.productService.getAllProduct().subscribe({
      next: res =>{
        this.products = res;
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  DeleteProduct(product:any):void{
    let v=confirm("etes vous sure de vouloir supprimer?");
    if(v){
      // this.productService.deleteProduct(product);
      // this.getAllProduct()
      this.productService.deleteProduct(product).subscribe({
        next: value =>{
          this.getAllProduct()
        },
        error: err=>{
          console.log(err)
        }
      })
    }
  }


  HandleSelected(p: any) {
    p.selected = !p.selected;
  }
}
