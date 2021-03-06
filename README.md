
# To-Do-List Task
Register/Login project with authentication and authorization 
and creating new user (Admin/User) with a hashed password

## The features in this project
* Register a new User
* Login 
* Show all Users for Admin
* Delete users for Admin
* Add Task
* Show all Task for Admin
* Delete and Update Task fron User
* Delete Task from Admin

## Dependencies
* express
``` 
npm i express
```

* dotenv
``` 
npm i dotenv
```

* nodemon
``` 
npm i nodemon
```

* mongoose
``` 
npm i mongoose
```

* bcrypt
``` 
npm i bcrypt
```

* jsonwebtoken
``` 
npm i jsonwebtoken
```


## Models
- role model 
``` 
{
  role: { type: String, required: true },
  permissions: { type: Array, required: true },
}
```
- todo model 
```
{
  name: { type: String, required: true },
  isDel: { type: Boolean, required: true, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}
```
- user model 
```
{
    email: { type: String , unique: true , required: true},
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId , ref: "Role"},
}
```

## Backend routes
| HTTP Method        | URL                    | Request Body              | Success status   | Error Status |
|--------------------|------------------------|---------------------------|------------------|--------------|
| POST               | `/signup`              | { email, password, role } | 201              | 400          |
| POST               | `/login`               | { email, password }       | 200              | 400, 404     |
| GET                | `/getUsers`            |                           | 200              | 400          |
| POST               | `/addTask`             | { name }                  | 201              | 400          |
| GET                | `/allTask`             |                           | 200              | 404, 400     |
| PUT                | `delete`               | { id }                    | 200              | 404, 400     |
| PUT                | `/updateTask/:id`      | { name }                  | 200              | 404, 400     |
| PUT                | `/deleteTask/:id`      |                           | 200              | 404, 400     | 
| GET                | `TasksAdmin`           |                           | 200              | 400          |
| DELETE             | `/delateTaskAdmin/:id` |                           | 200              | 404, 400     |


# ER Diagram

# UML Diagram
