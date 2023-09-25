import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productsdetail:any;
  constructor(public _productservices:ProductsService) { 
   this.productsdetail = this._productservices.productdata;
  }

  ngOnInit(): void {

  }

}
