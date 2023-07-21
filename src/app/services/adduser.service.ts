import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adduser } from '../adduser';
import { UserAuthenService } from './user-authen.service';

// const url4=environment.basePath+"user/";

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  private baseUrl = "http://localhost:8848";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient,  private userAuthService: UserAuthenService) { }

  getAllUser():Observable<Adduser[]>{
    return this.http.get<Adduser[]>(`${this.baseUrl}/api/user/users`);
  }
  getUserById(userID: number): Observable<Adduser>{
    return  this.http.get<Adduser>(`${this.baseUrl}/${userID}`);

  }
  

  addnewUser(user:  Adduser): Observable<object>{
    return this.http.post(`${this.baseUrl}`,user);

  }
  updateUser(userID:number,user: Adduser):Observable<object>{
    return this.http.put(`${this.baseUrl}/${userID}`,user);
  }
  
  deleteUser(userID:number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/api/user/users/${userID}`);
  }
 


  public login(loginData: any) {
    return this.http.post(this.baseUrl + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.http.get(this.baseUrl + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.http.get(this.baseUrl + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
  
}
