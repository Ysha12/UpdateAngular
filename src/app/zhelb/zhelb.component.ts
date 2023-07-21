import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../loan';

@Component({
  selector: 'app-zhelb',
  templateUrl: './zhelb.component.html',
  styleUrls: ['./zhelb.component.scss']
})
export class ZhelbComponent implements OnInit{
  loan!:Loan[];
  orgLoan:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private loanService:LoanService) { }

  ngOnInit(): void {
    this.fetchConsultants()
  }
  filterConsultant(){
    this.loan=this.orgLoan.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchConsultants(){
    // correct
    this.loanService.getAllLoan().subscribe(data=>{
      this.loan=data;
      console.log(data)
    });
  }
  // saveNewConsultant(){
  //   this.consultantServ.newConsultant(this.consultantForm.value).subscribe(response=>{
  //     this.fetchConsultants();
  //     alert("Request has been saved");
  //   },error=>{
  //     alert("Fail to save new consultant");
  //   })
  // };
  // updateConsultant(){
  //   this.consultantServ.updateConsultant(this.updateForm.controls["id"].value,this.updateForm.value).subscribe(response=>{
  //     this.fetchConsultants();
  //     alert("Consultant has been update");
  //   },error=>{
  //     alert("Fail to update new consultant");
  //   })
  // };

  // deleteConsultant(consultant:any){
  //   this.consultantServ.deleteConsultant(consultant.id).subscribe(response=>{
  //     this.fetchConsultants();
  //     alert("Consultant has been deleted");
  //   },error=>{
  //     this.fetchConsultants();
  //     alert("Fail to delete new consultant");
  //   })
  // }
}