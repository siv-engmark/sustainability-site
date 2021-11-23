import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take, firstValueFrom } from 'rxjs';
import { InfoCardData } from './info-card/info-card.component';
import { SDG_data } from './sdg/sdg.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public info_cards: Observable<InfoCardData[]>;

  constructor(private firestore: AngularFirestore) {
    this.info_cards = firestore.collection<InfoCardData>('info_cards', ref => ref.orderBy('order')).valueChanges();
   }

  public async getSdg(num: string): Promise<any> {
    const query = this.firestore.collection<SDG_data>('esg', ref => ref.where('number', '==', num)).valueChanges();
    return (await firstValueFrom(query))[0];
  }
}
