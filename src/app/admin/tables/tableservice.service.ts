import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class TableserviceService {
    @Output() change: EventEmitter<string> = new EventEmitter();
    constructor() {}
    updateheader(getthis) {
        this.change.emit(getthis);
    }
}
