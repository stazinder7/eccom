import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nav=[
    {items:'Home',route:''},
    {items:'About us',route:''},
    {items:'Products',route:'/products'},
    {items:'Patner with us',route:''},
    {items:'Contact us',route:''},
    // {items:'Login',route:''},
    // {items:'Register',route:''}
  ]

}
