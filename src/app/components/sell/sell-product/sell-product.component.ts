import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  configSwiper: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 1,
    loop: false,
    zoom: true
  };

  configSwiper2: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      /*nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'*/
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      430: {
        slidesPerView: 1.5
      },
      530: {
        slidesPerView: 2
      },
      900: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    },
    slidesPerView: 4,
    spaceBetween: 1,
    loop: true
  };

}
