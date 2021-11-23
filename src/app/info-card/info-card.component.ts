import { Component, OnInit, Input } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { DataService } from '../data.service';
import { SdgComponent, SDG_data } from '../sdg/sdg.component';

export interface InfoCardData {
  heading?: string;
  title?: string;
  description?: string;
  image?: string;
  caption?: string;
  order?: number;
  sdg_number?: string;
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  // The data that the component should display
  @Input() data: InfoCardData = {};

  constructor(private _bottomSheet: MatBottomSheet, private dataSvc: DataService) {}

  async openBottomSheet(sdg_num: any) {
    if(!!sdg_num) {
      const sdg_data = await this.dataSvc.getSdg(sdg_num);
      this._bottomSheet.open(SdgComponent, {data: sdg_data});
    }
  }

  ngOnInit(): void {
  }

}
