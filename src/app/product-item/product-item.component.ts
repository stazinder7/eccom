import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: '.app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  proView: any;
  openModal:boolean=false;
  @Output() newItemEvent = new EventEmitter<any>();

  pro_view(productItems: any) {
    // this.proView = productItems;
    this.newItemEvent.emit(productItems)
    console.log(productItems)
    this.openModal = true;
  }
  products:any;
  url: string = 'https://fakestoreapi.com/products';
  constructor() { }

  ngOnInit(): void {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.products = json;
    });
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
