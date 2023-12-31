import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl="http://localhost:8848/User/login"
   requestheader=new HttpHeaders({
      "NO AUTH":"True"
   })
  login: any;

  constructor(private http: HttpClient) { }
  public generateToken(LoginData:any){
   return this.http.post(`${this.baseUrl}`, LoginData,{headers:this.requestheader});
  }

//   me() {
//     const url = new URL('/api/me', environment.apiUrl).href;
//     return this.jwt.isStoredJwt
//        ? this.http.get(url).pipe(catchError(() => of(null)))
//        : of(null);
//  }

//  login(username: string, password: string) {
//   const url = new URL('/api/login', environment.apiUrl).href;
//   return this.http
//      .post(url, {
//         username,
//         password,
//      })
//      .pipe(
//         catchError(() => of(null)),
//         mergeMap((result: any) => {
//            if (!result) {
//               alert('Could not login');
//               return of();
//            }
//            this.jwt.jwt = result.accessToken;
//            return this.me();
//         })
//      );
// }
// signup(username: string, password: string) {
//   const url = new URL('/api/signup', environment.apiUrl).href;
//   return this.http
//      .post(url, {
//         username,
//         password,
//      })
//      .pipe(
//         catchError(() => of(null)),
//         mergeMap((result: any) => {
//            if (!result) {
//               alert('Could not sign up');
//               return of();
//            }
//            this.jwt.jwt = result.accessToken;
//            return this.me();
//         })
//      );
// }





}