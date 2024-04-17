import { Component } from '@angular/core';
import { AuthService } from '../common/auth-service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu', 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  showMenu: boolean = false;  

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe({
      next: (event: NavigationEnd) => {
        this.showMenu = !event.urlAfterRedirects.includes('/login');
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}


