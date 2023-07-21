import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgetComponent } from './forget/forget.component';
import { RegisterComponent } from './register/register.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ZhelbComponent } from './zhelb/zhelb.component';
import { HHelbComponent } from './h-helb/h-helb.component';
import { UniversityComponent } from './university/university.component';
import { ProjectComponent } from './project/project.component';
import { IllustComponent } from './illust/illust.component';
import { ReportComponent } from './report/report.component';
import { AdviceConsultComponent } from './advice-consult/advice-consult.component';
import { RegistUniComponent } from './regist-uni/regist-uni.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { HhelbComponent } from './hhelb/hhelb.component';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth/auth.component';
import { provideRoutes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DashComponent,
    LogInComponent,
    ForgetComponent,
    RegisterComponent,
    ConsultantComponent,
    ZhelbComponent,
    HHelbComponent,
    UniversityComponent,
    ProjectComponent,
    IllustComponent,
    ReportComponent,
    AdviceConsultComponent,
    RegistUniComponent,
    CourseComponent,
    StudentComponent,
    HhelbComponent,
    AuthComponent,
    AdduserComponent,
    ViewUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    
  ],
  providers: [],
  // providors:[
  //   {provide: HTTP_INTERCEPTORS, useClass: JwtService, multi: true }, +AuthService,
  // ],
   bootstrap: [AppComponent]
})
export class AppModule { }
