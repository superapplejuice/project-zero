export const itemConnect = `
  {
    id
    name
    description
    price
    images
    user {
      id
    }
    createdAt
    updatedAt
  }
`

export const userConnect = `
  {
    id
    username
    email
    createdAt
    items {
      id
    }
  }
`
