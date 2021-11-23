import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, SwiperOptions } from "swiper";

// Import the Data Service used to get the info cards from the database
import { DataService } from './data.service';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
  };

  constructor(public dataSvc: DataService) {}
}
