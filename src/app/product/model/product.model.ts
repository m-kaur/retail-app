import { CatalogEntryViewEntity, ConEntityOrProEntity, ImagesEntity, AlternateImagesEntityOrPrimaryImageEntity, OffersEntity, OfferPriceEntity, ItemDescriptionEntity, CustomerReviewEntity } from "../../common/model/CatalogEntryViewResponse";
import { OnInit } from "@angular/core";

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

    constructor(catalogEntryViewEntity: CatalogEntryViewEntity = undefined) {

      if( catalogEntryViewEntity ) {
        this.itemId = catalogEntryViewEntity.itemId;
        this.title = catalogEntryViewEntity.title;
        this.purchasingChannelCode = catalogEntryViewEntity.purchasingChannelCode;
        this.promotions = catalogEntryViewEntity.Promotions;
        
        let offers: Array<OffersEntity> = catalogEntryViewEntity.Offers;
        if( offers && offers.length > 0 ) {
          let offerPrices : Array<OfferPriceEntity> = offers[0].OfferPrice;
          if( offerPrices && offerPrices.length > 0 ) {
            this.offerPrice = offerPrices[0].formattedPriceValue;
          }
        }
      
        let itemDescriptions: Array<ItemDescriptionEntity> = catalogEntryViewEntity.ItemDescription;
        if( itemDescriptions && itemDescriptions.length > 0 ) {
          this.features = itemDescriptions[0].features;
        }
        
        let customerReviews: Array<CustomerReviewEntity> = catalogEntryViewEntity.CustomerReview;
        if( customerReviews && customerReviews.length > 0 ) {
          let customerReview : CustomerReviewEntity = customerReviews[0];
          this.totalReviewCount = customerReview.totalReviews;
          let proCustomeReviews : Array<ConEntityOrProEntity> = customerReview.Pro;
          if( proCustomeReviews && proCustomeReviews.length > 0 ) {
            let proCustomeReview : ConEntityOrProEntity = proCustomeReviews[0];
            this.proReview = {
              datePosted: proCustomeReview.datePosted,
              overallRating: proCustomeReview.overallRating,
              review: proCustomeReview.review,
              screenName: proCustomeReview.screenName,
              title: proCustomeReview.title,
            }
          }
          let conCustomeReviews : Array<ConEntityOrProEntity> = customerReview.Con;
          if( conCustomeReviews && conCustomeReviews.length > 0 ) {
            let conCustomeReview : ConEntityOrProEntity = conCustomeReviews[0];
            this.conReview = {
              datePosted: conCustomeReview.datePosted,
              overallRating: conCustomeReview.overallRating,
              review: conCustomeReview.review,
              screenName: conCustomeReview.screenName,
              title: conCustomeReview.title,
            }
          }
        }
        if( catalogEntryViewEntity.Images && catalogEntryViewEntity.Images.length > 0 ) { 
          this.images =  catalogEntryViewEntity.Images[0].AlternateImages.map(img => {
            return img.image;
          })
        }
      }
    }

}