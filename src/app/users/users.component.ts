import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {
    this.users= this.usersService.getUsers();
  }

  ngOnInit() {
  }

}
