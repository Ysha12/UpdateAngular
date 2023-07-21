import { Component, OnInit } from '@angular/core';
import { Adduser } from '../adduser';
import { AdduserService } from '../services/adduser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent  {
  user: Adduser = new Adduser();

  constructor(private adduserService: AdduserService,  private router: Router) { }
  addNewUser(){
    this.adduserService.addnewUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToList();
    },(error) => console.log(error));
  }

  onSubmit(){
    this.addNewUser();
    console.log(this.user)
  }
  goToList(){
    this.router.navigate(['/viewuser'])
  }


}
