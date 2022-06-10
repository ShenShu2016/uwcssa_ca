/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticleTags = /* GraphQL */ `
  subscription OnCreateArticleTags {
    onCreateArticleTags {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        publish
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticleTags = /* GraphQL */ `
  subscription OnUpdateArticleTags {
    onUpdateArticleTags {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        publish
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticleTags = /* GraphQL */ `
  subscription OnDeleteArticleTags {
    onDeleteArticleTags {
      id
      tagID
      articleID
      tag {
        id
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        content
        coverPageImgURL
        coverPageDescription
        publish
        active
        createdAt
        updatedAt
        owner
        articleCountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEventTags = /* GraphQL */ `
  subscription OnCreateEventTags {
    onCreateEventTags {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
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
        publish
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
    }
  }
`;
export const onUpdateEventTags = /* GraphQL */ `
  subscription OnUpdateEventTags {
    onUpdateEventTags {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
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
        publish
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
    }
  }
`;
export const onDeleteEventTags = /* GraphQL */ `
  subscription OnDeleteEventTags {
    onDeleteEventTags {
      id
      tagID
      eventID
      tag {
        id
        createdAt
        updatedAt
        owner
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
        publish
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
    }
  }
`;
