import { Component, OnInit } from '@angular/core';
import { Adduser } from '../adduser';
import { AdduserService } from '../services/adduser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userID!:number;
  user: Adduser=new Adduser();
  users: Adduser[]= [];
  constructor(private addService:AdduserService, private route:ActivatedRoute, private router:Router) { }
  
  // fetchUser(){
  //   this.userID = this.route.snapshot.params['userID'];
  //   this.addService.getAllUser().subscribe(res => {

  //     this.users = res;
  //     this.users.forEach(user => {
  //       if (user.userID === this.userID) {
  //         this.user = user;
  //         console.log(this.user);
          
  //       }
  //       throw Error;
  //     })

  //     console.table(this.users);
  //   });
  // }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.user=new Adduser();
    // this.fetchUser();
    this.addService.getUserById(this.userID).subscribe(data =>{
      console.log(data);
    })
 
  }
  onSubmit(){
    this.addService.updateUser(this.userID, this.user).subscribe(data =>{
     console.log(data);

    })
  }
  // updateUser(userID: number){
  //   this.router.navigate(['/edituser',userID])
  // };

}
 