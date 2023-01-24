# Mini Trello Clone

This project uses [json-server](https://github.com/typicode/json-server) to mock a REST API and [Next.js](https://github.com/zeit/next.js) for the front-end.

## Getting Started

1. Clone the repository:
```
git clone https://github.com/thadaniumang/mini-trello-clone.git
```

2. Install dependencies:
```
npm install
```

3. Start the json-server:
```
json-server --watch fakeData/db.json
```

4. Start the Next.js development server in a new terminal:
```
npm run dev
```


5. Open [http://localhost:3000](http://localhost:3000) to view the json-server and [http://localhost:8080](http://localhost:8080) to view the Next.js app in the browser.

## Available Scripts

- `npm run dev`: starts the Next.js development server at port 8080
- `npm run build`: builds the Next.js app for production
- `npm start`: starts the Next.js app in production mode at port 8080 (after running `npm run build`)

## Fake API Endpoints

### /lists

- `GET /lists`: Returns a list of all lists
- `GET /lists/:id`: Returns a specific list by ID
- `POST /lists`: Creates a new list
- `PUT /lists/:id`: Updates a specific list by ID
- `DELETE /lists/:id`: Deletes a specific list by ID

### /users

- `GET /users`: Returns a list of all users
- `GET /users/:id`: Returns a specific user by ID
- `POST /users`: Creates a new user
- `PUT /users/:id`: Updates a specific user by ID
- `DELETE /users/:id`: Deletes a specific user by ID
