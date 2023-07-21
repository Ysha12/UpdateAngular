import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultantService } from 'src/app/services/consultant.service';
import { Consultant } from '../consultant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit{
  consultants!:Consultant[];
  orgConsultants:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private consultantServ:ConsultantService,private router: Router) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.fetchConsultants()
  }
  filterConsultant(){
    this.consultants=this.orgConsultants.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchConsultants(){
    // correct
    this.consultantServ.getAllConsultant().subscribe(data=>{
      this.consultants=data;
    },(error)=>console.log(error));
  }
  // newConsultant(){
  //   this.consultantServ.newConsultant(this.consultantForm.value).subscribe((response: any[]) =>{
  //     this.fetchConsultants();
  //     alert("Request has been saved");
  //   },error=>{
  //     alert("Fail to save new consultant");
  //   });
  // }
  update(ID: number){
    this.router.navigate(['/edituser',ID])
  };

  // deleteConsultant(consultant:any){
  //   this.consultantServ.deleteConsultant(consultant.id).subscribe(response=>{
  //     this.fetchConsultants();
  //     alert("Consultant has been deleted");
  //   },error=>{
  //     this.fetchConsultants();
  //     alert("Fail to delete new consultant");
  //   })
  // }
  deleteConsultant(consID:number){
    this.consultantServ.deleteConsultant(consID).subscribe(data  =>{
    console.log(data);
    this.fetchConsultants();
    }, (error) =>console.log(error));
  }
}