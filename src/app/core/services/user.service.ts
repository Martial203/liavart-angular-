import { Injectable } from "@angular/core";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService{

  users: User[] = [
    {
      id: 1,
      firstName: "Martial",
      name: "NOUNGA",
      gender: "male",
      country: "cameroon",
      town: "yaounde",
      email: "martialnounga@gmail.com",
      userName: "martialD",
      password: "myPassword",
      // website: "https://liavart.go.yn.fr",
      avatar: "/assets/icon.png",
      description: "I'm an on coming Angular and Express developper"
    },
    {
      id: 2,
      firstName: "Joel",
      name: "EMBID",
      gender: "male",
      country: "Cameroon",
      town: "yaounde",
      email: "joelembid@gmail.com",
      userName: "The Process",
      password: "myPassword",
      // website: "https://liavart.go.yn.fr",
      avatar: "/assets/blankProfilePicture.png",
      description: "I'm an on coming Angular and Express developper"
    }
  ];

  addAUser(user: User): number{
    this.users.push(user);
    return user.id;
  }

  getTheNumberOfUsers(): number{
    return this.users.length;
  }

  getAllUsers(): User[]{
    return this.users;
  }

  getAUserById(id: number): User{
    let index = this.users.findIndex(x => x.id===id);
      return this.users[index];
  }
}
