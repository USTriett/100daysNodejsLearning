import * as express from 'express';
import * as dotenv from 'dotenv';
import { log } from 'console';
import {router} from './routes/day2'
dotenv.config();

//------------------------Hello world get----------------------
const app = express();
const port = 3000;
app.use(express.json());
app.use('/day2', router);

app.get('/', (req: express.Request, res: express.Response)=>{
    // console.log('req.app props: ', req.app); // object reference to middlewares in current express
    // console.log('req.baseUrl: ', req.baseUrl); // get /
    
    
    res.send('Hello world');
});




// 
app.listen(port, ()=>{
    console.log("Server is running at: http://localhost:%d", port);
    
})