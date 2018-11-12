import { CatalogEntryViewEntity, ConEntityOrProEntity, OffersEntity,
        OfferPriceEntity, ItemDescriptionEntity, CustomerReviewEntity } from '../../common/model/CatalogEntryViewResponse';
import { OnInit } from '@angular/core';

export class Product {
    public itemId: string;
    public title: string;
    public images: Array<String>;
    public features: Array<Object>;
    public offerPrice: string;
    public purchasingChannelCode: string;
    public promotions: Array<Object>;
    public customerReview: Array<Object>;
    public proReview: ConEntityOrProEntity;
    public conReview: Object;
    public totalReviewCount: string;

    constructor(catalogEntryViewEntity?: CatalogEntryViewEntity) {

      if (catalogEntryViewEntity) {
        this.itemId = catalogEntryViewEntity.itemId;
        this.title = catalogEntryViewEntity.title;
        this.purchasingChannelCode = catalogEntryViewEntity.purchasingChannelCode;
        this.promotions = catalogEntryViewEntity.Promotions;

        const offers: Array<OffersEntity> = catalogEntryViewEntity.Offers;
        if ( offers && offers.length > 0 ) {
          const offerPrices: Array<OfferPriceEntity> = offers[0].OfferPrice;
          if ( offerPrices && offerPrices.length > 0 ) {
            this.offerPrice = offerPrices[0].formattedPriceValue;
          }
        }

        const itemDescriptions: Array<ItemDescriptionEntity> = catalogEntryViewEntity.ItemDescription;
        if ( itemDescriptions && itemDescriptions.length > 0 ) {
          this.features = itemDescriptions[0].features;
        }

        const customerReviews: Array<CustomerReviewEntity> = catalogEntryViewEntity.CustomerReview;
        if ( customerReviews && customerReviews.length > 0 ) {
          const customerReview: CustomerReviewEntity = customerReviews[0];
          this.totalReviewCount = customerReview.totalReviews;
          const proCustomeReviews: Array<ConEntityOrProEntity> = customerReview.Pro;
          if ( proCustomeReviews && proCustomeReviews.length > 0 ) {
            const proCustomeReview: ConEntityOrProEntity = proCustomeReviews[0];
            this.proReview = {
              datePosted: proCustomeReview.datePosted,
              overallRating: proCustomeReview.overallRating,
              review: proCustomeReview.review,
              screenName: proCustomeReview.screenName,
              title: proCustomeReview.title,
            };
          }
          const conCustomeReviews: Array<ConEntityOrProEntity> = customerReview.Con;
          if ( conCustomeReviews && conCustomeReviews.length > 0 ) {
            const conCustomeReview: ConEntityOrProEntity = conCustomeReviews[0];
            this.conReview = {
              datePosted: conCustomeReview.datePosted,
              overallRating: conCustomeReview.overallRating,
              review: conCustomeReview.review,
              screenName: conCustomeReview.screenName,
              title: conCustomeReview.title,
            };
          }
        }
        if ( catalogEntryViewEntity.Images && catalogEntryViewEntity.Images.length > 0 ) {
          this.images = catalogEntryViewEntity.Images[0].AlternateImages.map(img => {
            return img.image;
          });
        }
      }
    }

}
