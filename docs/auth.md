# Auth Flow

The auth flow makes use of [Cookies](https://github.com/expressjs/cookie-parser/blob/master/README.md) and [JSON Web Tokens](https://jwt.io) (`JWT`). There are 2 steps to authenticating the user on every request. The `token` string is **not** stored in the client `localStorage`, but in the server instead.

The auth flow is done entirely in the server.

### Requirements

- `cookie-parser` is needed to parse the `res.cookie` header
- Populates the `req.cookies` with the cookie from `res.cookie`

## Login

1. Attach the user's `id` into the JWT and sign the token
2. Set the token in to `req.cookies`

## Authentication on every request

1. Decode the JWT in `req.cookies.token`
2. Attach the user's `id` into a custom header, `req.userId`

- If `req.cookies.token` is undefined or empty, this step is **skipped**

3. Verify the user's `id` in `req.userId` by querying the Prisma `db`

- If `req.userId` is undefined or empty, this step is **skipped**
