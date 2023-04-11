import { PipeTransform,Pipe } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name:'filterStudents'
})
export class FilterPipe implements PipeTransform{
    transform(students:Student[],filterText:string) {
        if(students.length===0 || filterText===''){
            return students;
        }
        else{
         return  students.filter((student)=>{    //loop over every student in the array and returning the array
             return student.gender.toLowerCase()===filterText.toLowerCase()  //return the students which satisfy the condition
            })
        }
    }
}