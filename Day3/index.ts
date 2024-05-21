import express = require('express');
import * as dotenv from 'dotenv';
import {DefaultView}  from './views/defaultView';
import {studentRouter} from './routes/StudentRoute';

dotenv.config();


type Request = express.Request;
type Response = express.Response;

const app = express();
const port = 3000;

//-------------------------Middlewares--------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//----------------------------Routes----------------------
app.use("/student", studentRouter)
//----------------------------Set View Engine-------------

app.get('/', (req: Request, res: Response) =>{
    console.log("Server running at: http://localhost:%d", port);
    
    res.send((new DefaultView()).get());
});


app.listen(port, ()=>{
    console.log("Server is running at: http://localhost:%d", port);
    
})