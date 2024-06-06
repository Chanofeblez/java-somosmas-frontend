import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-tabset';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { SuccessStoriesComponent } from './components/common/success-stories/success-stories.component';
import { DoctorsComponent } from './components/common/doctors/doctors.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { EmergencySupportComponent } from './components/common/emergency-support/emergency-support.component';
import { ServicesComponent } from './components/common/services/services.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FeaturedServicesComponent } from './components/common/featured-services/featured-services.component';
import { AboutComponent } from './components/common/about/about.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeoneSearchComponent } from './components/pages/home-demo-one/homeone-search/homeone-search.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { BookAnAppointmentComponent } from './components/common/book-an-appointment/book-an-appointment.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DepartmentsPageComponent } from './components/pages/departments-page/departments-page.component';
import { DoctorsPageComponent } from './components/pages/doctors-page/doctors-page.component';
import { DoctorProfilePageComponent } from './components/pages/doctor-profile-page/doctor-profile-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { BookAnAppointmentPageComponent } from './components/pages/book-an-appointment-page/book-an-appointment-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { BlogSpecialPageComponent } from './components/pages/blog-special-page/blog-special-page.component';
//import { BlogDetailsLeftSidebarPageComponent } from './components/pages/blog-details-left-sidebar-page/blog-details-left-sidebar-page.component';
//import { BlogDetailsRightSidebarPageComponent } from './components/pages/blog-details-right-sidebar-page/blog-details-right-sidebar-page.component';
import { BlogDetailsNoSidebarPageComponent } from './components/pages/blog-details-no-sidebar-page/blog-details-no-sidebar-page.component';
import { BlogCategoriesPageComponent } from './components/pages/blog-categories-page/blog-categories-page.component';
import { BlogTagPageComponent } from './components/pages/blog-tag-page/blog-tag-page.component';
import { BlogSearchResultPageComponent } from './components/pages/blog-search-result-page/blog-search-result-page.component';
import { CoordinatorsPageComponent } from './components/pages/coordinators-page/coordinators-page.component';
import { BoardPageComponent } from './components/pages/board-page/board-page.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        FooterComponent,
        NavbarComponent,
        SubscribeComponent,
        BlogComponent,
        SuccessStoriesComponent,
        DoctorsComponent,
        TestimonialsComponent,
        EmergencySupportComponent,
        ServicesComponent,
        WhyChooseUsComponent,
        FeaturedServicesComponent,
        AboutComponent,
        HomeoneBannerComponent,
        HomeoneSearchComponent,
        TopHeaderComponent,
        BookAnAppointmentComponent,
        FeaturesComponent,
        HometwoBannerComponent,
        HomethreeBannerComponent,
        ContactPageComponent,
        DepartmentsPageComponent,
        DoctorsPageComponent,
        DoctorProfilePageComponent,
        ServicesPageOneComponent,
        ServicesPageTwoComponent,
        ServicesDetailsPageComponent,
        FaqPageComponent,
        BookAnAppointmentPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ForgotPasswordPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ThankYouPageComponent,
        NotFoundComponent,
        ComingSoonPageComponent,
        AboutPageComponent,
        PartnerComponent,
        BlogGridPageComponent,
        BlogLeftSidebarPageComponent,
        BlogRightSidebarPageComponent,
        WidgetSidebarComponent,
        BlogSpecialPageComponent,
        BlogDetailsNoSidebarPageComponent,
        BlogCategoriesPageComponent,
        BlogTagPageComponent,
        BlogSearchResultPageComponent,
        CoordinatorsPageComponent,
        BoardPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        NgxScrollTopModule,
        BrowserAnimationsModule,
        StickyNavModule,
        TabsModule,
        AccordionModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }