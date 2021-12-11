export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      firstName
      lastName
      major
      avatarImgURL
      backGroundImgURL
      linkedIn
      github
      intro
    }
  }
`;
