import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogCategoriesPageComponent } from './components/pages/blog-categories-page/blog-categories-page.component';
//import { BlogDetailsLeftSidebarPageComponent } from './components/pages/blog-details-left-sidebar-page/blog-details-left-sidebar-page.component';
import { BlogDetailsNoSidebarPageComponent } from './components/pages/blog-details-no-sidebar-page/blog-details-no-sidebar-page.component';
//import { BlogDetailsRightSidebarPageComponent } from './components/pages/blog-details-right-sidebar-page/blog-details-right-sidebar-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogSearchResultPageComponent } from './components/pages/blog-search-result-page/blog-search-result-page.component';
import { BlogSpecialPageComponent } from './components/pages/blog-special-page/blog-special-page.component';
import { BlogTagPageComponent } from './components/pages/blog-tag-page/blog-tag-page.component';
import { BookAnAppointmentPageComponent } from './components/pages/book-an-appointment-page/book-an-appointment-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
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
import { ServicesComponent } from './components/common/services/services.component';
import { CoordinatorsPageComponent } from './components/pages/coordinators-page/coordinators-page.component';
import { BoardPageComponent } from './components/pages/board-page/board-page.component';

const routes: Routes = [
    {path: 'home', component: HomeDemoOneComponent},

    //{path: 'index-2', component: HomeDemoTwoComponent},
    //{path: '', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'demostrations', component: ServicesComponent},
    {path: 'services-1', component: ServicesPageOneComponent},
    {path: 'services-2', component: ServicesPageTwoComponent},
    {path: 'services-details', component: ServicesDetailsPageComponent},
    {path: 'departments', component: DepartmentsPageComponent},
    {path: 'doctors', component: DoctorsPageComponent},
    {path: 'coordinator-profile/by/:id', component: DoctorProfilePageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'thank-you', component: ThankYouPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'mission', component: PrivacyPolicyPageComponent},
    {path: 'presidential-regulation', component: TermsConditionsPageComponent},
    {path: 'book-appointment', component: BookAnAppointmentPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-special', component: BlogSpecialPageComponent},
    {path: 'blog-details-3', component: BlogDetailsNoSidebarPageComponent},
    {path: 'blog-categories', component: BlogCategoriesPageComponent},
    {path: 'blog-tag', component: BlogTagPageComponent},
    {path: 'blog-search-result', component: BlogSearchResultPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'coordinators', component: CoordinatorsPageComponent},
    {path: 'boards', component: BoardPageComponent},
    // Here add new pages component
    {path: '**', redirectTo:'home'} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
