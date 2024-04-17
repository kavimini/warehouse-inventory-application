import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { User } from "./data/user";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private apiUrl = `${environment.apiUrl}/users`;
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }

  }