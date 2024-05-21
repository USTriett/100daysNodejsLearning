import express = require("express");
import { StudentModel } from "../models/StudentModels";
export
    class StudentController{
        private $studentModel: StudentModel;
        constructor(studentModel: StudentModel){
            this.$studentModel = studentModel;
        }
        public async GetAllStudent(){
            await this.$studentModel.FetchAllStudents();
            return this.$studentModel.get();
        }
    }