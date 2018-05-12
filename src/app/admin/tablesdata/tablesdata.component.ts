import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {IMyDpOptions} from 'mydatepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';
@Component({
    selector: 'app-tablesdata',
    templateUrl: './tablesdata.component.html',
    styleUrls: ['./tablesdata.component.css']
})
export class TablesdataComponent implements OnInit {
    myDate: any = null; // initial date not set

    tableData=[];
    productToEdit;
    dropdowndata=[];
    dateChanged: string = '';
    inputFieldChanged: string = '';
    inputValid: boolean = false;
    addNewRow: boolean = false;
    constructor(public formBuilder: FormBuilder,private modalService: NgbModal) {}
    openrow() {
        this.addNewRow = !this.addNewRow;
    }
   public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
 
    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: 2018, month: 10, day: 9 } };
    addIntoTable(){
        const tempdata={
            'id':1,
            'user':'bhanu',
            'date': '12-12-3334',
            'status': 'haveto select',
            'reason':'first and the last and the new thing'
        }
        this.tableData.push(tempdata);
    }
    doSomeActionOnOpen(){
        
    }
    doSomeActionOnClose(){
        
    }
     showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg',backdrop:true });

    activeModal.componentInstance.modalHeader = 'Large Modal';
}
    ngOnInit() {
        this.dropdowndata=[
            {
            'name':'first'
        },
         {
            'name':'second'
        },
         {
            'name':'third'
        },
         {
            'name':'fourth'
        }
        ];
        var winHeight = $(window).height() - 125;
        $('.content-wrapper').css({'min-height': winHeight});
    }

}
