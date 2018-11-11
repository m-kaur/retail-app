  export interface CatalogEntryViewResponse {
    CatalogEntryView?: (CatalogEntryViewEntity)[] | null;
  }
  export interface CatalogEntryViewEntity {
    CustomerReview?: (CustomerReviewEntity)[] | null;
    DPCI: string;
    Images?: (ImagesEntity)[] | null;
    ItemDescription?: (ItemDescriptionEntity)[] | null;
    Offers?: (OffersEntity)[] | null;
    POBoxProhibited: string;
    PackageDimension?: (PackageDimensionEntity)[] | null;
    Promotions?: (PromotionsEntity)[] | null;
    ReturnPolicy?: (ReturnPolicyEntity)[] | null;
    UPC: string;
    applyCouponLink: string;
    buyable: string;
    callOutMsg: string;
    catEntryId: string;
    classId: string;
    department: string;
    eligibleFor: string;
    inventoryCode: string;
    inventoryStatus: string;
    itemId: string;
    itemType: string;
    manufacturer: string;
    manufacturerPartNumber: string;
    packageQuantity: string;
    partNumber: string;
    purchasingChannel: string;
    purchasingChannelCode: string;
    shortDescription: string;
    title: string;
    webclass: string;
  }
  export interface CustomerReviewEntity {
    Con?: (ConEntityOrProEntity)[] | null;
    ConsolidatedRatableAttributes?: (RatableAttributesEntityOrConsolidatedRatableAttributesEntity)[] | null;
    Pro?: (ConEntityOrProEntity)[] | null;
    Reviews?: (ReviewsEntity)[] | null;
    consolidatedOverallRating: string;
    totalPages: string;
    totalReviews: string;
  }
  export interface ConEntityOrProEntity {
    RatableAttributes?: (RatableAttributesEntityOrConsolidatedRatableAttributesEntity)[] | null;
    datePosted: string;
    overallRating: string;
    review: string;
    reviewKey?: string;
    screenName: string;
    title: string;
  }
  export interface RatableAttributesEntityOrConsolidatedRatableAttributesEntity {
    description: string;
    name: string;
    value: string;
  }
  export interface ReviewsEntity {
    Comments?: (CommentsEntity)[] | null;
    RatableAttributes?: (RatableAttributesEntityOrConsolidatedRatableAttributesEntity)[] | null;
    city: string;
    customerId: string;
    datePosted: string;
    helpfulVotes: string;
    overallRating: string;
    review: string;
    reviewKey: string;
    screenName: string;
    state: string;
    title: string;
    totalComments: string;
    totalVotes: string;
  }
  export interface CommentsEntity {
    city: string;
    commentKey: string;
    commentText: string;
    postedDate: string;
    screenName: string;
    userKey: string;
    userTier: string;
  }
  export interface ImagesEntity {
    AlternateImages?: (AlternateImagesEntityOrPrimaryImageEntity)[] | null;
    PrimaryImage?: (AlternateImagesEntityOrPrimaryImageEntity)[] | null;
    imageCount?: string;
    source?: string;
  }
  export interface AlternateImagesEntityOrPrimaryImageEntity {
    image: string;
  }
  export interface ItemDescriptionEntity {
    features?: (string)[] | null;
  }
  export interface OffersEntity {
    OfferPrice?: (OfferPriceEntity)[] | null;
  }
  export interface OfferPriceEntity {
    currencyCode: string;
    formattedPriceValue: string;
    priceQualifier: string;
    priceValue: string;
  }
  export interface PackageDimensionEntity {
    name: string;
    unit: string;
    value: string;
  }
  export interface PromotionsEntity {
    Description?: (DescriptionEntity)[] | null;
    endDate: string;
    promotionIdentifier: string;
    promotionType: string;
    startDate: string;
  }
  export interface DescriptionEntity {
    legalDisclaimer: string;
    shortDescription: string;
  }
  export interface ReturnPolicyEntity {
    ReturnPolicyDetails?: (ReturnPolicyDetailsEntity)[] | null;
    legalCopy: string;
  }
  export interface ReturnPolicyDetailsEntity {
    guestMessage: string;
    policyDays: string;
    user: string;
  }
