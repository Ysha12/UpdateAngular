import { Component, OnInit } from '@angular/core';
import { Adduser } from '../adduser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdduserService } from '../services/adduser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit{
  user!:Adduser[];
  orgAdduser:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private adduserservice:AdduserService,private router:Router) { }
  
  ngOnInit(): void {
    this.fetchUser()
  }
  filterUser(){
    this.user=this.orgAdduser.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchUser(){
    // correct
    this.adduserservice.getAllUser().subscribe(data=>{
      this.user=data;
    },(error)=>console.log(error));
  }

  updateUser(userID: number){
    this.router.navigate(['/edituser',userID])
  }
  // deleteUser(userID: number){
  //   this.router.navigate([userID])
  // }

  //   deleteUser(userID:number){
  //   this.adduserservice.deleteUser(userID).subscribe(response=>{
  //     // this.filterUser();
  //     alert("User has been deleted");
  //   },error=>{
  //     // this.filterUser();
  //     alert("Fail to delete U");
  //     this.fetchUser();
  //   })
  // }

  deleteUser(userID:number){
    this.adduserservice.deleteUser(userID).subscribe(data  =>{
    console.log(data);
    this.fetchUser();
    }, (error) =>console.log(error));

  }
}
