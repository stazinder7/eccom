import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/product8.png',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/product8.png',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'},
    {img:'https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/product/big-product2.jpg',name:'Oversize Cotton Dress',category:'Women',newprice:'$110',oldprice:'$120',rating:'4'}
  ]
}
