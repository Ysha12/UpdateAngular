import { Component, OnInit } from '@angular/core';
import { Consultant } from '../consultant';
import { ConsultantService } from '../services/consultant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  consultant: Consultant = new Consultant();

  constructor(private consultantService: ConsultantService,  private router: Router) { }
  addNewConsultant(){
    this.consultantService.addnewConsultant(this.consultant).subscribe(data=>{
      console.log(data);
      this.goToList();
    },(error) => console.log(error));
  }

  onSubmit(){
    this.addNewConsultant();
    console.log(this.consultant)
  }
  goToList(){
    this.router.navigate(['/consultant'])
  }

}
