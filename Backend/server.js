import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import router from './routes/userRoutes.js' 

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.text());
app.use(cors());


//Routes
app.use('/api/users', router)

let users = [
    {id:1, name:'suman', email:'jyxsuman@gmail.com'},
    {id:2, name:'Rushali', email:'rushalilage12@gmail.com'}
]


//homepage
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

//GET method to fetch  all  users
app.get('/users', (req, res) => {
    res.json(users)
})
//GET method to fetch single user using ID
app.get('/users/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = users.find(u => u.id === id)
    if(!user){
        return res.status(404).json({message: 'user not found', success: 'failed'})
    }
    res.json(user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));