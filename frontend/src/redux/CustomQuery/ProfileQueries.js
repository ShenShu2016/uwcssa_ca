export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      firstName
      lastName
      major
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      intro
    }
  }
`;
