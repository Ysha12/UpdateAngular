import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url4=environment.basePath+"university/";
@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private baseUrl = "http://localhost:8848/University/";
  constructor(private http: HttpClient) {
   }

   getAllUniversity(){
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  newLoanaddNewUniversity(data:any){
    return this.http.post(`${url4}`,data);
  }
  editUniversity(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deleteUniversity(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
}
