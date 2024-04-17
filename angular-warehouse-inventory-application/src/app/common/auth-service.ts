import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRoleKey = 'currentUserRole'; 
  private currentUserRole: string = ''; 

  constructor() {
    this.loadRole(); 
  }

  setRole(role: string): void {
    this.currentUserRole = role; 
    sessionStorage.setItem(this.currentUserRoleKey, role); 
  }

  getRole(): string {
    return this.currentUserRole; 
  }

  isOperator(): boolean {
    return this.getRole() === 'Operator';
  }

  logout(): void {
    sessionStorage.removeItem(this.currentUserRoleKey); 
    this.currentUserRole = ''; 
  }

  private loadRole(): void {
    const storedRole = sessionStorage.getItem(this.currentUserRoleKey);
    if (storedRole) {
      this.currentUserRole = storedRole; 
    }
  }
}
