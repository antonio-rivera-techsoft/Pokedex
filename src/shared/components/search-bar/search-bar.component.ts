import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() filterValueEvent = new  EventEmitter;
  filterValue:string = '';
  emitTypeEvent(event: any){
    this.filterValueEvent.emit(event);
  }
}
