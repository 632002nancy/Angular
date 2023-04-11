import { Student } from "./student";

export class StudentService{
    students:Student[]=[
        {name:"Nancy",course:"Btech",marks:460,gender:"female"},
        {name:"Yash",course:"Btech",marks:560,gender:"male"},
        {name:"Shorya",course:"Btech",marks:590,gender:"male"},
        {name:"Himanshu",course:"Btech",marks:520,gender:"male"},
    ];
    totalMarks:number=600;
}