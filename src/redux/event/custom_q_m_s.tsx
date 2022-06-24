/*
 * @Author: Shen Shu
 * @Date: 2022-06-16 21:24:48
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-24 00:13:07
 * @FilePath: /uwcssa_ca/src/redux/event/custom_q_m_s.tsx
 * @Description:
 *
 */
export const eventSortByCreatedAt = /* GraphQL */ `
  query EventSortByCreatedAt(
    $eq: ID
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
        eventParticipants(limit: 1, filter: { owner: { eq: $eq } }) {
          items {
            createdAt
            id
            owner
            updatedAt
          }
        }
        tags {
          items {
            tagID
          }
        }
        eventLocation {
          id
          name
          formatted_address
          place_id
          reference
          types
          apartmentNumbers
          # getPlaceResult
          lat
          lng
          createdAt
          updatedAt
          owner
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

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!, $eq: ID) {
    getEvent(id: $id) {
      id
      title
      coverPageImgURL
      coverPageDescription
      content
      imgURLs
      sponsor
      online
      group
      tags {
        items {
          tagID
        }
      }
      count {
        id
        count
        commentCount
        like
        targetTable
        createdAt
        updatedAt
        owner
        countArticleId
        countEventId
        countCommentId
      }
      likes(filter: { owner: { eq: $eq } }, limit: 1) {
        items {
          owner
          id
        }
      }
      comments(sortDirection: DESC, filter: { isDeleted: { eq: false } }) {
        items {
          id
          content
          createdAt
          likes(filter: { owner: { eq: $eq } }, limit: 1) {
            items {
              owner
              id
            }
          }
          user {
            avatarURL {
              objectURL
              objectCompressedURL
              objectThumbnailURL
            }
            id
            name
            createdAt
          }
          count {
            id
            count
            commentCount
            like
            targetTable
            createdAt
            updatedAt
            owner
            countArticleId
            countEventId
            countCommentId
          }
        }
      }
      startDate
      endDate
      eventStatus
      eventParticipants(limit: 1, filter: { owner: { eq: $eq } }) {
        items {
          createdAt
          id
          owner
          updatedAt
        }
      }
      eventLocation {
        id
        description
        place_id
        reference
        terms
        types
        apartmentNumbers
        geocodingResult
        lat
        lng
        createdAt
        updatedAt
        owner
      }
      form {
        id
        createdAt
        updatedAt
        owner
        formEventId
        formItems(sortDirection: ASC, limit: 19) {
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
      isPublish
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
  }
`;
