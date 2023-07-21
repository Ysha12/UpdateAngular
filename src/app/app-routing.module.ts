import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgetComponent } from './forget/forget.component';
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { IllustComponent } from './illust/illust.component';
import { ZhelbComponent } from './zhelb/zhelb.component';
import { HHelbComponent } from './h-helb/h-helb.component';
import { ReportComponent } from './report/report.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AdviceConsultComponent } from './advice-consult/advice-consult.component';
import { RegistUniComponent } from './regist-uni/regist-uni.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'dash', component:DashComponent },
  {path:'forget',component:ForgetComponent},
  {path:'register',component:RegisterComponent},
  {path:'project',component:ProjectComponent},
  {path:'illust',component:IllustComponent},
  {path:'zhelb',component:ZhelbComponent},
  {path:'h-helb',component:HHelbComponent},
  {path:'report',component:ReportComponent},
  {path:'consultant',component:ConsultantComponent},
  {path:'advice', component:AdviceConsultComponent},
  {path:'reguni',component:RegistUniComponent},
  {path:'course',component:CourseComponent},
  {path:'student',component:StudentComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'viewuser',component:ViewUserComponent},
  {path:'edituser/:ID',component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

