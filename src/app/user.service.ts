import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  activeUsers = [
    {
      name: 'Max'
    },
    {
      name: 'Anna'
    }
  ];
  inactiveUsers = [
    {
      name: 'Chris'
    },
    {
      name: 'Manu'
    }
  ];

  deactivateUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  activateUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
