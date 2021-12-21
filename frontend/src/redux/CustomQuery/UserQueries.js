export const userSortBySortKey = /* GraphQL */ `
  query UserSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
      }
    }
  }
`;
