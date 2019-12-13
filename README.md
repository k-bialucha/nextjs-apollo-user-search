# Next.js + Apollo user search

A simple app for demo purposes.
Based on [create-next-app with Apollo example](https://github.com/zeit/next.js/tree/canary/examples/with-apollo) .

## Installation:

Install dependencies:

```bash
npm install
```

Important: the relevant GitHub Access Token should be set in the GITHUB_TOKEN environment variable in `package.json`, in the following commands:

- `scripts -> start`
- `scripts -> dev`
- `scripts -> build`

```bash
npm run dev
```

## TODOs:

- Validation component and related parts (error messages).
- User search: querying by name and email, loading more requests.
- User profile page: loading and displaying user details.
- Testing: adding more tests (Jest support is included).
