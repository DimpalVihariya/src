import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './headers/common-header/common-header.component';
import { CommonFooterComponent } from './footer/common-footer/common-footer.component';
import { LoginComponent } from './user/login/login/login.component';
import { SignupComponent } from './user/signup/signup/signup.component';
import { EditJobseekerComponent } from './job-seeker/edit-jobseeker/edit-jobseeker/edit-jobseeker.component';
import { JobSearchComponent } from './shared-components/job-search/job-search/job-search.component';
import { JobPostComponent } from './employer/job-post/job-post/job-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    LoginComponent,
    SignupComponent,
    EditJobseekerComponent,
    JobSearchComponent,
    JobPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
