import {Component, OnInit} from '@angular/core';
import {TableserviceService} from '../tables/tableservice.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

    constructor(private Tableservice: TableserviceService) {}

    ngOnInit() {
        this.Tableservice.change.subscribe(isOpen => {
            console.log('call ayega')
        });
    }

}
