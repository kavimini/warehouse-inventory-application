import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAddService } from './users-add.service';
import { User } from '../data/user';
import { getRoles } from 'src/app/common/enum/RoleEnum';

@Component({
  selector: 'user-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  user: User = {
    id: 0,
    name: '',
    username: '',
    role: ''
  };

  roles : string[] = [];
  constructor(private userAddService: UserAddService) {} 

  ngOnInit() {
    this.getUserRoles();
  }

  submitForm(): void {
    this.userAddService.addUser(this.user).subscribe(data =>{
      console.log(data);
    });
}

  getUserRoles(){
     this.roles = getRoles();
  }

  closeDialogAdd() {
    this.closeDialog.emit();
    window.location.reload();
 }
}
