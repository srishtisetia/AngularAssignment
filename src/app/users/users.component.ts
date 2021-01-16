import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[]=[
    {
      name:"anuj",
      username:"anuj1",
      email:"anuj@com"
    },
    {
      name:"varun",
      username:"varun1",
      email:"varun@com"
    },
    {
      name:"arun",
      username:"arun1",
      email:"arun@com"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
