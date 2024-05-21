import * as express from 'express'
import { StudentController } from '../controller/StudentController';
import { StudentModel } from '../models/StudentModels';
import { DefaultView } from '../views/defaultView';

//---------------------------------Type Define-----------------------------
type Router = express.Router;

//--------------------------------Routing----------------------------------

var studentRouter:Router = express.Router();

let model: StudentModel = new StudentModel();
const controller:StudentController = new StudentController(model);

studentRouter.route('/').get(
    async (req, res) => {
        // res.send(new DefaultView().get());
        const studentList = await controller.GetAllStudent();
        res.status(200).json(studentList);
    }
);

export {studentRouter}