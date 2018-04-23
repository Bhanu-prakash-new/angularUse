import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ittpCommonService} from './../../httpservice.service';
import {ToastrService} from 'ngx-toastr';
import {Socket} from 'ngx-socket-io';
import {TableserviceService} from './tableservice.service';
import {ModalDialogService} from 'ngx-modal-dialog';
import {CustomModalComponent} from '../../dialog/dialogcomponent';
import {ViewContainerRef} from '@angular/core';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    product: any = {};
    showproducts = [];
    documentSelected = [];
    orderedProducts = [];
    constructor(public htpservice: ittpCommonService, private toastr: ToastrService, private tableserv: TableserviceService, public socket: Socket, private modalService: ModalDialogService, private viewContainer: ViewContainerRef) {}
    componentcalling() {
        this.tableserv.updateheader('data seteed');
    }
    addproduct() {
//        console.log('going')
//        this.modalService.openDialog(this.viewContainer, {
//            title: 'Simple dialog',
//            childComponent: CustomModalComponent,
//            settings: {
//                closeButtonClass: 'close theme-icon-close'
//            },
//            data: {
//                text: 'Some text content'
//            }
//        });
//        this.componentcalling();
        console.log(this.product, 'fine see')
        let formData: FormData = new FormData();
        formData.append('productname', this.product.productname);
        formData.append('productrate', this.product.productrate);
        formData.append('image', this.product.images[0]);
        this.htpservice.httpformdatacall('/api/tableController/createFile', 'post', formData).then(obj => {
            this.htpservice.httpcall('/api/tableController/sendDocuments', 'get').then(obj => {
                console.log(obj, 'obj of obj');
                this.showproducts = obj.result;
                this.toastr.success('', "Added the Document Successfully");
            })
        })
    }
    selectdocuments(id) {
        var index = this.documentSelected.indexOf(id);
        index > -1 ? this.documentSelected.splice(index, 1) : this.documentSelected.push(id);
    }
    public trackByFn(index, item) {
        return item.id;
    }
    public trackByprodFn(index, item) {
        return item.product_id;
    }
    public fileUploader(event) {
        console.log(event, 'event')
        const elem = event.target;
        if (elem.files.length > 0) {
            this.product.images = [];
            this.product.images.push(elem.files[0]);
            console.log(elem.files[0]);
        }

    }
    getOrderedProducts() {
        this.htpservice.httpcall('/api/dispatchcontroller/productsOrdered', 'get').then(obj => {
            this.orderedProducts = obj.result;
        })
    }
    public orderProduct() {
        console.log('what is it')
        var data = {document_ids: this.documentSelected};
        this.htpservice.httpcall('/api/dispatchcontroller/orderProducts', 'post', data).then(obj => {
            obj.result.map(product => {
                // this.orderedProducts.unshift(product);
            })
        })
    }
    public removeOrderedProduct() {
        var data = {document_ids: this.documentSelected};
        this.htpservice.httpcall('/api/dispatchcontroller/getjoindocuments', 'post', data).then(obj => {
            if (obj.success) {
                this.orderedProducts = this.orderedProducts.filter(orderprod => {
                    return this.documentSelected.indexOf(orderprod.product_id) == -1;
                });
            }
        })
    }

    public removeproduct() {
        var data = {document_ids: this.documentSelected};
        this.htpservice.httpcall('/api/tableController/deleteDocuments', 'post', data).then(obj => {
            this.htpservice.httpcall('/api/tableController/sendDocuments', 'get').then(obj => {
                console.log(obj, 'obj of obj');
                this.showproducts = obj.result;
            })
        })
    }

    ngOnInit() {
        var winHeight = $(window).height() - 125;
        $('.content-wrapper').css({'min-height': winHeight});
        this.socket.on('Dispatcher', (msg: any) => {
            this.orderedProducts.unshift(msg.dispatch_data);
            console.log(msg, 'message is what')
            //            this.messages.push(msg);
            //            console.log(msg);
            //            console.log(this.messages);
        });
        this.htpservice.httpcall('/api/tableController/sendDocuments', 'get').then(obj => {
            console.log(obj, 'obj of obj');
            this.showproducts = obj.result;
        })
        console.log('check ')
        this.getOrderedProducts();
    }

}
