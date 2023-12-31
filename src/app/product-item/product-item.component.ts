import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {productsJson} from '../../products'


@Component({
  selector: '.app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  proView: any;
  openModal:boolean=false;
  showProduct:boolean=false;

  @Output() newItemEvent = new EventEmitter<any>();

  pro_view(productItems:any) {
    this.showProduct =  !this.showProduct;
    // this.proView = productItems;
    this.newItemEvent.emit({productItems,visiblePopup:this.showProduct})
    // console.log(productItems)
    
    this._productservices.productdata=productItems;
    this.openModal = true;
  }
  products:any;
  // url: string = 'https://fakestoreapi.com/products';
  url :string ='';
  constructor(public _productservices:ProductsService) { 
  }

  ngOnInit(): void {
    this.products = productsJson;
    // fetch(this.url).then(res => res.json())
    // .then(json => {
    //   this.products = json;
    // });

  }
  // products = [
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/product8.png', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/product8.png', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' },
  //   { image: 'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg', title: 'Oversize Cotton Dress', category: 'Women', price: '$110', oldprice: '$120', rating: '4' }
  // ]
  

}
