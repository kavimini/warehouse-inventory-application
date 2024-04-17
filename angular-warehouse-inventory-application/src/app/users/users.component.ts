import { Component, OnInit } from '@angular/core';
import { User } from './data/user';
import { UserService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = []; 

  isUserAdd: boolean = false; 

  constructor(private userService: UserService) {} 

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userService.getData().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  addUser(){
    this.isUserAdd = true;
  }

  closeDialogAdd(){
    this.isUserAdd = false;
  }

}
