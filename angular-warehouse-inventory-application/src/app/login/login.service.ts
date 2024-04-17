import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { UserStatus } from "./data/userstatus";
import { User } from "./data/user";

@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    private apiUrl = `${environment.apiUrl}/users/login`;
  
    constructor(private http: HttpClient) {}
  
    getData(user: User): Observable<UserStatus> {
        const params = new HttpParams().set('username', user.username);
        return this.http.get<UserStatus>(this.apiUrl, { params });
      }
  }