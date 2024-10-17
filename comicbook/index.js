import express from 'express'
const app=express();
const PORT=8900;

import cors from 'cors'
import connnection from '../comicbook/db.js'
import morgan from 'morgan'


import router from '../comicbook/router/comicRoute.js'





app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.use('/api/v1/',router)

app.listen(PORT,()=>{
    console.log(`server is running  on PORT ${PORT}`);
    
})