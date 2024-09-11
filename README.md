
# NextAuth Integration

This project demonstrates how to implement authentication using NextAuth with OAuth providers. For the OAuth integration, we are using Google, Twitter, and GitHub providers to facilitate secure and convenient user sign-ins.


## Build with


## Installation

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

