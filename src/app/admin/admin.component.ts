import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

    bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    constructor() {}

    ngOnInit() {
        var winHeight = $(window).height() - 100;
        $('.content-wrapper').css({'min-height': winHeight});
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

}
