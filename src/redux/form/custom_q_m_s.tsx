/*
 * @Author: Shen Shu
 * @Date: 2022-06-15 23:51:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 13:37:24
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

export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      formItems {
        nextToken
      }
      event {
        id
        title
        coverPageImgURL
        coverPageDescription
        content
        imgURLs
        sponsor
        online
        group
        startDate
        endDate
        eventStatus
        isPublish
        active
        createdAt
        updatedAt
        owner
        eventEventLocationId
        eventFormId
        eventCountId
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        email
        rank
        uWindsorEmail
        windsorStudent
        fullName
        contactEmail
        title
        about
        website
        emailSubscription
        active
        createdAt
        updatedAt
        owner
        userProfileAvatarURLId
      }
      formEventId
    }
  }
`;
