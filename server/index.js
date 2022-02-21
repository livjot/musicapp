import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import musicRoutes from './routes/music';
import productRoutes from './routes/productRoutes';

dotenv.config();

 
const home = express();//whatever functionalities available in the express js those are ready to get and start using them
//once they get stores in this variable

//Here it is using middleware
home.use(cors());
home.use(morgan("dev"));
home.use(bodyParser.json());
home.use(bodyParser.urlencoded({extended:false}));

//we use morgan as a callback function but as per new practise we pass "dev" because
//we are using it in the development mode

//db
mongoose.connect(process.env.DATABASE,
{})
.then(() =>console.log('DB is now connected'))
.catch((error)=>console.log('there is an error while connecting to DB',error));




/*this is harcoding on how cors is used behind the scenes either this or we can use the above method 
const applyMiddleware = (res,req, callback) =>{
Other than callback we can give any name and then invoke it and if we do not invoke this callback the server will stop running
    callback();
}
home.use(applyMiddleware);*/


//routes
//because we pasted the the array of objects to a file in routes.
home.use("/api", musicRoutes);
home.use("/api",productRoutes);
//"api" is the prefix part and we add any end points we have



home.listen(3031,()=> console.log('server will be running on port 3031'));









