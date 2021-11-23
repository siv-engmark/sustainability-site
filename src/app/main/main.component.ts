import { Component, OnInit } from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { Pagination, SwiperOptions } from "swiper";

// Import the Data Service used to get the info cards from the database

import {ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { InfoCardData } from '../info-card/info-card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
  };

  public info_card_list: Observable<InfoCardData[]>;

  constructor(public dataSvc: DataService, private route: ActivatedRoute) {
    this.info_card_list = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      const name: any = params.get('id');
      return this.dataSvc.getInfoCardsByProductName(name);
    }));
  }


}
