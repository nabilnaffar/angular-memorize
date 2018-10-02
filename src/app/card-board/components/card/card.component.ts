import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() value: string;
    @Input() isFlipped = false;
    @Input() isMatched = true;
    @Input() isDisabled: boolean;
    @Input() imgSrc: string;
    @Output() click: EventEmitter<{}> = new EventEmitter();

    clicked(event) {
        event.stopPropagation();
        this.click.emit();
    }
}
