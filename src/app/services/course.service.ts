import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../course';
import { Observable } from 'rxjs';
const url4=environment.basePath+"consultant/";
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = "http://localhost:8848/Course/";
  constructor(private http: HttpClient) {
   }

  getAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  newCourse(data:any){
    return this.http.post(`${url4}`,data);
  }
  updateCourse(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deleteCourse(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
}
