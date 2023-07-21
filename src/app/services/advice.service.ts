import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const url4=environment.basePath+"consultant/";

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private baseUrl = "http://localhost:8848/Consultant/";
  constructor(private http: HttpClient) {
   }

  getAllConsultant(){
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  newConsultant(data:any){
    return this.http.post(`${url4}`,data);
  }
  updateConsultant(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deleteConsultant(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
}
