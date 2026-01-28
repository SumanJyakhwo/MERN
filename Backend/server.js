import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js' 

import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);



//Error handling
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



/*
//In memory user array
let users = [
    {id:1, name:'suman', email:'jyxsuman@gmail.com'},
    {id:2, name:'Rushali', email:'rushalilage12@gmail.com'}
]

//homepage
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

//GET
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user
  });
});

//POST
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

//PUT
app.put("/users/:id", (req, res) => {
  const userIndex = users.findIndex(u => u.id === Number(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const { name, email } = req.body;

  users[userIndex] = {
    id: users[userIndex].id,
    name,
    email
  };

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: users[userIndex]
  });
});

//PATCH
app.patch("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  Object.assign(user, req.body);

  res.status(200).json({
    success: true,
    message: "User partially updated",
    data: user
  });
});

//DELETE
app.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex(u => u.id === Number(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  users.splice(userIndex, 1);

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
});
*/
