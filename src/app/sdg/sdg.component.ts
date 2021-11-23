import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
export interface SDG_data {
  number: string,
  title: string,
  elements: string[]
}

@Component({
  selector: 'app-sdg',
  templateUrl: './sdg.component.html',
  styleUrls: ['./sdg.component.scss']
})
export class SdgComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<SdgComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: SDG_data) {}

  close(): void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit(): void {
  }

}
