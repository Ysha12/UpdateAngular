import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdviceService } from '../services/advice.service';
import { Advice } from '../advice';

@Component({
  selector: 'app-advice-consult',
  templateUrl: './advice-consult.component.html',
  styleUrls: ['./advice-consult.component.scss']
})
export class AdviceConsultComponent implements OnInit{
  advice!:Advice[];
  orgAdvice:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private adviceServ:AdviceService) { }

  ngOnInit(): void {
    this.fetchConsultants()
  }
  filterConsultant(){
    this.advice=this.orgAdvice.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchConsultants(){
    // correct
    this.adviceServ.getAllConsultant().subscribe((response: any[])=>{
      this.orgAdvice=response;
      this.advice=response;
      console.log(this.advice)
    });
  }

}
