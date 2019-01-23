import { Component } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);  

  title = 'ClientApp';
}
