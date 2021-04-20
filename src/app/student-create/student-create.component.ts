import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
    
    student : Student =  new Student();
    message : String = "";
    students : Student[] = [];
    constructor(private route: ActivatedRoute, 
      private router: Router,private service : StudentService){
    }
           
  
  ngOnInit(): void {
    
  }
  
  onSubmit(){
    this.service.saveStudent(this.student).subscribe(
      data => {
        this.message = data,
        this.getAllStudent()
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllStudent(){
    this.router.navigate(['/all']);
  }
}
