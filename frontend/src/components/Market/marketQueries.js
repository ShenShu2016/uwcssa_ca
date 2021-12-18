export const marketItemSortBySortKey = /* GraphQL */ `
  query MarketItemSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgURLs
        title
        price
        marketType
        year
        tags
        make
        model
        marketRentalSaleRent
        propertyType
        bedroomCounts
        address {
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
        }
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
        description
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortBySortKeyPosts = /* GraphQL */ `
  query MarketItemSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgURLs
        title
        price
        marketType
        year
        make
        model
        marketRentalSaleRent
        propertyType
        bedroomCounts
        address {
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
        }
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
        description
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgURL
          backGroundImgURL
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortBySortKeyItem = /* GraphQL */ `
  query MarketItemSortBySortKeyItem(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgURLs
        title
        price
        marketType
        description
        marketItemCondition
        marketItemCategory
        tags
        location
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          avatarImgURL
          backGroundImgURL
          createdAt
          updatedAt
          badges
        }
        owner
      }
      nextToken
    }
  }
`;

export const marketItemSortBySortKeyVehicle = /* GraphQL */ `
  query MarketItemSortBySortKeyVehicle(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgURLs
        price
        marketType
        description
        tags
        vehicleType
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          avatarImgURL
          sortKey
          createdAt
          updatedAt
          badges
        }
        owner
      }
      nextToken
    }
  }
`;

export const marketItemSortBySortKeyRental = /* GraphQL */ `
  query MarketItemSortBySortKeyRental(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgURLs
        price
        marketType
        description
        tags
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        address {
          description
          place_id
          reference
          terms
          types
          apartmentNumbers
        }
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        contactPhone
        contactWeChat
        contactEmail
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          avatarImgURL
          sortKey
          createdAt
          updatedAt
          badges
        }
        owner
      }
      nextToken
    }
  }
`;

export const getMarketUserInfo = /* GraphQL */ `
  query GetMarketUserInfo($id: ID!) {
    getMarketUserInfo(id: $id) {
      id
      phone
      weChat
      email
      userID
      createdAt
      updatedAt
    }
  }
`;
