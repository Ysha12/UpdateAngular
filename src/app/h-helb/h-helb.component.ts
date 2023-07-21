import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../services/loan.service';
import { Loan } from '../loan';

@Component({
  selector: 'app-h-helb',
  templateUrl: './h-helb.component.html',
  styleUrls: ['./h-helb.component.scss']
})
export class HHelbComponent implements OnInit {
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

}
