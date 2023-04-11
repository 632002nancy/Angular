import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent implements OnInit{
  title = 'pipes';
  students:Student[]=[];
  totalMarks:number=0;
  filterText:string=''

  constructor(private studentService:StudentService){}

  ngOnInit():void{
    this.students=this.studentService.students;
    this.totalMarks=this.studentService.totalMarks;
  }
}
