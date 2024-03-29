import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BookAnAppointmentPageComponent } from './components/pages/book-an-appointment-page/book-an-appointment-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DepartmentsDetailsComponent } from './components/pages/departments-details/departments-details.component';
import { DepartmentsPageComponent } from './components/pages/departments-page/departments-page.component';
import { DoctorProfilePageComponent } from './components/pages/doctor-profile-page/doctor-profile-page.component';
import { DoctorsPageComponent } from './components/pages/doctors-page/doctors-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services-1', component: ServicesPageOneComponent},
    {path: 'services-2', component: ServicesPageTwoComponent},
    {path: 'service/:slug', component: ServicesDetailsPageComponent},
    {path: 'departments', component: DepartmentsPageComponent},
    {path: 'department/:slug', component: DepartmentsDetailsComponent},
    {path: 'doctors', component: DoctorsPageComponent},
    {path: 'doctor-profile/:slug', component: DoctorProfilePageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'thank-you', component: ThankYouPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'book-appointment', component: BookAnAppointmentPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog/:slug', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}