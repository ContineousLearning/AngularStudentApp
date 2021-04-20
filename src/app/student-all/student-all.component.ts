import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students : Student[] = [];
  message : String = "";
  constructor(private service:StudentService) { }
    ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this.service.getAllStudents().subscribe(
        (data) => {
          this.students=data
        },
        (error) => {
          this.students = [];
          console.log(error);
        }   
    );
  }

  deleteStudent(id:number){
    //console.log("Data is: "+id);
    this.service.deleteStudent(id).subscribe(
      data => {
        this.message = data,
        this.getAllStudent()
      },
     error => {
       console.log(error);
     } 
    );
  }
}
