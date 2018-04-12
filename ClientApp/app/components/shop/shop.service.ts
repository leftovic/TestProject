import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Shop } from './shop.model';
import { ShopMock } from './shop.mock';

@Injectable()
export class ShopService {

    constructor() { }

    getShopItems(): Observable<Shop[]> {
        // Todo: send the message _after_ fetching the heroes
        return of();
    }

    //getShopItemsByType(type: string): Observable<Shop[]> {
    //    // Todo: send the message _after_ fetching the hero
    //    //return of(ShopMock.find(item => item.type === type));
    //}

}




