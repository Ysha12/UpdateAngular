import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { University } from '../university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-regist-uni',
  templateUrl: './regist-uni.component.html',
  styleUrls: ['./regist-uni.component.scss']
})
export class RegistUniComponent implements OnInit {
  university!:University[];
  orgUniversity:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private universityService:UniversityService) { }

  ngOnInit(): void {
    this.fetchUniversity()
  }
  filterUniversity(){
    this.university=this.orgUniversity.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchUniversity(){
    // correct
    this.universityService.getAllUniversity().subscribe((response: any[])=>{
      this.orgUniversity=response;
      this.university=response;
      console.log(this.university)
    });

  }
}
