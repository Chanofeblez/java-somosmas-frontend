import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public navbarData: any;
    public sidebarModalData: any;

    constructor(
        public router: Router,
        private content: NavbarService
    ) {
        this.content.getData().subscribe((navbarData: any) => {
            this.navbarData = navbarData.data.attributes;
        });
        this.content.getSidebarModalData().subscribe((sidebarModalData: any) => {
            this.sidebarModalData = sidebarModalData.data.attributes;
        });
    }

    ngOnInit(): void {}

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}