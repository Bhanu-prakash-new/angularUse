import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tablesdata',
    templateUrl: './tablesdata.component.html',
    styleUrls: ['./tablesdata.component.css']
})
export class TablesdataComponent implements OnInit {
    settings = {
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };

    constructor() {}

    ngOnInit() {
        var winHeight = $(window).height() - 125;
        $('.content-wrapper').css({'min-height': winHeight});
    }

}
