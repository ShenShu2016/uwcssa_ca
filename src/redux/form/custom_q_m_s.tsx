export const listFormItems = /* GraphQL */ `
  query ListFormItems(
    $filter: ModelFormItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        order
        isRequired
        isString
        isEmail
        isNumber
        isDate
        isBoolean
        isTrim
        description
        formType
        helperText
        minLength
        maxLength
        placeholder
        label
        formSelectChoices
        isExample
        createdAt
        updatedAt
        owner
        formFormItemsId
      }
      nextToken
    }
  }
`;
