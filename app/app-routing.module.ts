import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPostComponent } from './employer/job-post/job-post/job-post.component';
import { EditJobseekerComponent } from './job-seeker/edit-jobseeker/edit-jobseeker/edit-jobseeker.component';
import { JobSearchComponent } from './shared-components/job-search/job-search/job-search.component';
import { LoginComponent } from './user/login/login/login.component';
import { SignupComponent } from './user/signup/signup/signup.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'}, { path: 'jobpost', component: JobPostComponent },
{ path: 'jobsearch', component: JobSearchComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'editjobseeker', component: EditJobseekerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
