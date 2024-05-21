import { log } from 'console';
// import studentData from '../data/student.json';
import { stringify } from 'querystring';

interface Student {
    name: string;
    age: number;
    hometown: string;
    }
    
    interface StudentData {
    students: Student[];
    }
    
const studentData: StudentData = require('../data/student.json');
console.log(studentData);

export
    class StudentModel{
        // public $id: string;
        private $studentList: object[] = [];

        public async FetchAllStudents(){
            
            return new Promise((resolve) => {
                  setTimeout(() => {
                    const data: Student[] = studentData.students;
                    this.$studentList = data;
                    resolve(this.$studentList);
                  }, 3500);
            });
        }

        public get():object[]{
            return this.$studentList;
        }


    }