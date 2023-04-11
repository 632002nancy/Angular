import { Student } from "./student";

export class StudentService{
    students:Student[]=[
        {name:"Nancy",course:"Btech",marks:460},
        {name:"Yash",course:"Btech",marks:560},
        {name:"Shorya",course:"Btech",marks:590},
        {name:"Himanshu",course:"Btech",marks:520},
    ];
    totalMarks:number=600;
}