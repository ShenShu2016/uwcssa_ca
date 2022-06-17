/*
 * @Author: Shen Shu
 * @Date: 2022-06-16 21:24:48
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-16 21:45:50
 * @FilePath: /uwcssa_ca/src/redux/event/custom_q_m_s.tsx
 * @Description:
 *
 */
export const eventSortByCreatedAt = /* GraphQL */ `
  query EventSortByCreatedAt(
    $active: ActiveType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSortByCreatedAt(
      active: $active
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        tags {
          items {
            tagID
          }
        }
        eventLocation {
          apartmentNumbers
          createdAt
          description
          geocodingResult
          id
          lat
          lng
          owner
          place_id
          reference
          terms
          types
          updatedAt
        }
        form {
          createdAt
          formEventId
          id
          owner
          updatedAt
          formItems(sortDirection: DESC, limit: 19) {
            nextToken
            items {
              createdAt
              description
              formFormItemsId
              formSelectChoices
              formType
              helperText
              id
              isBoolean
              isDate
              isEmail
              isExample
              isNumber
              isRequired
              isString
              isTrim
              label
              maxLength
              minLength
              order
              owner
              placeholder
              question
              updatedAt
            }
          }
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          avatarURL {
            objectURL
            objectCompressedURL
            objectThumbnailURL
          }
        }
        eventEventLocationId
        eventFormId
        eventCountId
      }
      nextToken
    }
  }
`;
