import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mt-ratting',
    templateUrl: './ratting.component.html'
})
export class RattingComponent implements OnInit {

    rates: number[] = [1, 2, 3, 4, 5];

    rate: number = 0;

    @Output() rated = new EventEmitter<number>();

    previousRate: number;

    constructor() { }

    ngOnInit() {
    }

    setRate(r: number) {
        this.rate = r;
        this.previousRate = undefined;
        this.rated.emit(this.rate);
    }

    setTemporaryRate(r: number) {
        if (this.previousRate === undefined) {
            this.previousRate = this.rate;
        }

        this.rate = r;
    }

    clearTemporaryRate() {
        if (this.previousRate !== undefined) {
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    }

}
