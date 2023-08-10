import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    jQuery('.carouselArrow__left').click(function () {
      jQuery('.latestProduct').trigger('prev.owl.carousel');
    }),
    jQuery('.carouselArrow__next').click(function () {
      jQuery('.latestProduct').trigger('next.owl.carousel');
    }),
    jQuery('.BestSellercarouselArrow__left').click(function () {
      jQuery('.BestSellerProduct').trigger('prev.owl.carousel');
    }),
    jQuery('.BestSellercarouselArrow__next').click(function () {
      jQuery('.BestSellerProduct').trigger('next.owl.carousel');
    }),
    jQuery('.latestProduct,.BestSellerProduct').owlCarousel({

      loop: false,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }
}
