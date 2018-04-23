import {Component, OnInit} from '@angular/core';
import {ittpCommonService} from './../../httpservice.service';

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
    activemiddlepage: string;
    public editorValue: string = '';
    email: any = {};
    documents = [];
    inboxList = [];
    constructor(private callhttp: ittpCommonService) {}
    setMiddlePage(type) {
        this.activemiddlepage = type;
        if (type == 'inbox') {
            this.callhttp.httpformdatacall('/api/getrecords', 'get').then(response => {
                this.inboxList = response.data;
            })
        }
    }
    public fileUploader(event) {
        console.log(event, 'event')
        const elem = event.target;
        if (elem.files.length > 0) {
            this.documents.push(elem.files[0]);
            console.log(elem.files[0]);
        }

    }
    postrecord() {
        let formData: FormData = new FormData();
        for (var k in this.email) {
            formData.append(k, this.email[k]);
        }
        console.log(this.documents, 'find the docu')
        this.documents.forEach(obj => {
            formData.append('image', obj);
        })
        this.callhttp.httpformdatacall('/api/setrecords', 'post', formData).then(obj => {
            console.log(obj, 'obj');
        })
    }
    ngOnInit() {
        this.callhttp.httpformdatacall('/api/getrecords', 'get').then(response => {
            this.inboxList = response.data;
        })
        this.email.documents = [];
        this.activemiddlepage = 'inbox';
        var winHeight = $(window).height() - 505;
        $('.content-wrapper').css({'max-height': winHeight, 'overflow': 'auto', 'min-height': $(window).height() - 105});
    }

}
