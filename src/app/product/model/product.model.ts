import { CatalogEntryViewEntity } from "../../common/model/CatalogEntryViewResponse";

export class Product {
    itemId: string;
    title: string;
    images: Array<string>;
    features: Array<string>;
    offerPrice: string;
    purchasingChannelCode: string;

    constructor(catalogEntryViewEntity: CatalogEntryViewEntity = undefined) {
      if( catalogEntryViewEntity ) {
        this.itemId = catalogEntryViewEntity.itemId;
        this.title = catalogEntryViewEntity.title;
        this.offerPrice = catalogEntryViewEntity.Offers[0].OfferPrice[0].formattedPriceValue;
        this.purchasingChannelCode = catalogEntryViewEntity.purchasingChannelCode;
      }
    }

}