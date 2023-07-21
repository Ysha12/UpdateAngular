import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Consultant } from '../consultant';

// const url4=environment.basePath+"consultant/";
@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private baseUrl = "http://localhost:8848";
  constructor(private http: HttpClient) {
   }

  getAllConsultant():Observable<Consultant[]>{
    return this.http.get<Consultant[]>(`${this.baseUrl}/api/consultant/consultants`);
  }
  addnewConsultant(consultant: Consultant){
    return this.http.post(`${this.baseUrl}`,consultant);
  }
  updateConsultant(id:any,data:any){
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }
  deleteConsultant(consID:number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/api/consultant/consultants/${consID}`);
  }
}



