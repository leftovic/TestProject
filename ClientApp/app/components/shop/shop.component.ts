import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShopService } from './shop.service';


@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {

    private items: any;

    constructor(
        private route: ActivatedRoute,
        private shopService: ShopService,
        private location: Location
    ) { }

    ngOnInit(): void {
        const type = this.route.snapshot.paramMap.get('itemType');
        if (type == null) {
            this.getShopItems();
        }
        else {
            this.getShopItemsByType(type);
        }
    }

    getShopItems(): void {
        
    }

    getShopItemsByType(type: string): void {
        //this.shopService.getShopItemsByType(type)
        //    .subscribe((items:any) => this.items = items);
    }

}
