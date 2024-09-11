
# NextAuth Integration

This project demonstrates how to implement authentication using NextAuth with OAuth providers. For the OAuth integration, we are using Google, Twitter, and GitHub providers to facilitate secure and convenient user sign-ins.


## Build with
* [Next js](https://nextjs.org/) - Framework Next js.
* [Next Auth](https://next-auth.js.org/) - Authentication Library.
* [MUI](https://mui.com/) - UI Library.

## Installation
Install of framework and library
For Next js 
```bash 
npx create-next-app@latest
```
For Next Auth 
```bash 
npm install next-auth
```
For Mui 
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material
```

Install my-project with npm

```bash
  npm install 
  cd my-project
```


    
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

