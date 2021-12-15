export const listDepartments = `query ListDepartments {
    listDepartments {
      items {
        id
        name
        introduction
        email
        leader
        userID
        uwcssaJobs {
          items {
            id
            introduction
            title
            requirements
            bonus
            imgURLs
            benefits
            schedule
            like
            unlike
            active
            createdAt
            updatedAt
            departmentID
          }
        }
      }
    }
  }`;

export const listUwcssaJobs = `query ListUwcssaJobs($filter: ModelUwcssaJobFilterInput) {
      listUwcssaJobs(filter: $filter) {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgURLs
          benefits
          schedule
          like
          unlike
          active
          createdAt
          updatedAt
          departmentID
          userID
          department {
            id
            name
            introduction
            email
            leader
            userID
            createdAt
            updatedAt
          }
        }
      }
    }
  `;
