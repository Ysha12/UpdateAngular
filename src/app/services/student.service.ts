import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url4=environment.basePath+"student/";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8848/Student/";
  constructor(private http: HttpClient) {
   }

   getAllStudent(){
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  addNewStudent(data:any){
    return this.http.post(`${url4}`,data);
  }
  editStudent(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deleteStudent(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
}
