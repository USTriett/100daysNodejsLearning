//index.ts structure
/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

/**
 * App Variables
 */
dotenv.config();
if(!process.env.PORT){
    process.exit();
}
const PORT:number = parseInt(process.env.PORT as string, 10);
const HOST:string = process.env.HOST as string;

const app = express();

/**
 *  App Configuration
 */
app.use(helmet()); //collection of 14 middlewares function set HTTP res headers
app.use(cors()); // enable all cors requests
app.use(express.json());
/**
 * Server Activation
 */

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});