import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nvClass = false;
  constructor() { }

  ngOnInit(): void {
  }

  configSwiper: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 3
      },
      990: {
        slidesPerView: 4
      }
    },
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true
  };

  configSwiper2: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },*/
    breakpoints: {
      320: {
        slidesPerView: 4
      },
      560: {
        slidesPerView: 5
      },
      990: {
        slidesPerView: 6
      }
    },
    slidesPerView: 6,
    spaceBetween: 1,
    loop: true
  };

  configSwiper3: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },*/
    breakpoints: {
      320: {
        slidesPerView: 1.5
      },
      500: {
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
