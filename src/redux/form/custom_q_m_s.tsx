/*
 * @Author: Shen Shu
 * @Date: 2022-06-15 23:51:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-25 22:08:32
 * @FilePath: /uwcssa_ca/src/redux/form/custom_q_m_s.tsx
 * @Description:
 *
 */
// eslint-disable-next-line import/prefer-default-export
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
