import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student!:Student[];
  orgStudent:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent()
  }
  filterStudent(){
    this.student=this.orgStudent.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchStudent(){
    // correct
    this.studentService.getAllStudent().subscribe((response: any[])=>{
      this.orgStudent=response;
      this.student=response;
      console.log(this.student)
    });
  }
}
