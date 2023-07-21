
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url4=environment.basePath+"loan/";
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = "http://localhost:8848/Loan/";
  constructor(private http: HttpClient) {
   }

   getAllLoan(){
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  newLoan(data:any){
    return this.http.post(`${url4}`,data);
  }
  updateLoan(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deleteLoan(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
}