import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take, firstValueFrom, switchMap } from 'rxjs';
import { InfoCardData } from './info-card/info-card.component';
import { SDG_data } from './sdg/sdg.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public info_cards: Observable<InfoCardData[]>;

  public getProduct(id: string) {
    return this.firestore.doc(`products/${id}`).valueChanges();
  }

  public getInfoCardsByProductName(product_name: string): Observable<InfoCardData[]> {
    return this.firestore.doc(`products/${product_name}`).valueChanges().pipe(
      switchMap((product: any) => {
        return this.firestore.collection<InfoCardData>(`/products/${product_name}/info_cards`, ref => ref.orderBy('order')).valueChanges();
      })
    )
  }

  constructor(private firestore: AngularFirestore) {
    this.info_cards = firestore.collection<InfoCardData>('info_cards', ref => ref.orderBy('order')).valueChanges();
   }

  public async getSdg(num: string): Promise<any> {
    const query = this.firestore.collection<SDG_data>('esg', ref => ref.where('number', '==', num)).valueChanges();
    return (await firstValueFrom(query))[0];
  }

  public getInfoCards(cards: string[]): Observable<InfoCardData[]> {
    return this.firestore.collection<InfoCardData>('info_cards', ref => ref.where('title', 'in', cards)).valueChanges();
  }
}
