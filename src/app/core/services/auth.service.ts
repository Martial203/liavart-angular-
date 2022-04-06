import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  users!: User[];
  private myToken: string = "My false token";

  constructor(private userService: UserService) {}

  authenticate(userName: string, password: string): number{
    this.users = this.userService.getAllUsers();
    const index = this.users.findIndex(x => (x.userName===userName && x.password===password));
    if(index!==-1){
      return this.users[index].id;
    } else{
      return -1;
    }
  }

  getToken(): string{
    return this.myToken;
  }
}
