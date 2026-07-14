# Todo Backend API

A RESTful backend API for managing todo items, built using Node.js, Express.js, and MongoDB. The project follows MVC architecture and implements full CRUD functionality.

---

## Features

* Create a todo
* Retrieve all todos
* Retrieve a todo by ID
* Update a todo
* Delete a todo
* Structured using MVC architecture
* RESTful API design

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## Project Structure

```md
TODOAPP/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── createTodo.js
│   ├── deleteTodo.js
│   ├── getTodo.js
│   └── updateTodo.js
│
├── models/
│   └── ToDo.js
│
├── routes/
│   └── todos.js
│
├── .env
├── index.js
├── package.json
```

---

## Installation and Setup

### Clone the repository

```
git clone https://github.com/Arshnoor07/todo-backend.git
cd todo-backend
```

### Install dependencies

```
npm install
```

### Create environment variables

Create a `.env` file in the root directory:

```
PORT=4000
DATABASE_URL=your_mongodb_connection_string
```

### Run the server

```
npm start
```

The server will run at:

```
http://localhost:4000
```

---

## API Endpoints

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | /api/v1/createTodo     | Create a new todo |
| GET    | /api/v1/getTodos       | Get all todos     |
| GET    | /api/v1/getTodos/:id   | Get todo by ID    |
| PUT    | /api/v1/updateTodo/:id | Update a todo     |
| DELETE | /api/v1/deleteTodo/:id | Delete a todo     |

---

## Example Request

POST /api/v1/createTodo

```
{
  "title": "Learn Backend",
  "description": "Practice Node.js and Express"
}
```

---

## Future Improvements

* Add authentication using JWT
* Integrate frontend application
* Deploy to a cloud platform
* Improve validation and error handling

---

## Author

Arshnoor Singh
