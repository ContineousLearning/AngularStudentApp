import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl : string = 'http://localhost:9898/student';
  constructor(private http:HttpClient) { }

  getAllStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }

  deleteStudent(id : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/remove/${id}`,{responseType : 'text'});
  }

  saveStudent(student : Student) : Observable<any>{
    return this.http.post(`${this.baseUrl}/create`,student);
  }
}
