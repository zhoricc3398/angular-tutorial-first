import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService{
    users=[];

    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }

    removeUser(id) {
        this.users.splice(id, 1)
        return this.users
    }
}