export const customGetArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      content
      imagePath
      like
      unlike
      createdAt
      ByCreatedAt
      updatedAt
      topic {
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        name
        like
        unlike
        owner
        createdAt
        updatedAt
        articles {
          nextToken
        }
      }
      owner
    }
  }
`;

export const customArticleCommentByCreatedAt = /* GraphQL */ `
  query ArticleCommentByCreatedAt(
    $ArticleId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ArticleCommentByCreatedAt(
      ArticleId: $ArticleId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        like
        unlike
        createdAt
        ArticleId
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
