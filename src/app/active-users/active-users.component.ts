import {Component} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: { name: string }[];

  constructor(private usersService: UserService) {
    // the same may be done in ngOnInit
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.deactivateUser(id);
  }

}
