import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course!:Course[];
  orgUniversity:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.fetchUniversity()
  }
  filterUniversity(){
    this.course=this.orgUniversity.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  }
  fetchUniversity(){
    // correct
    this.courseService.getAllCourse().subscribe((response: any[])=>{
      this.orgUniversity=response;
      this.course=response;
      console.log(this.course)
    });

  }
}
