
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

# Dependencies
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


# Models
- role model 
`{
  role: { type: String, required: true },
  permissions: { type: Array, required: true },
}`


