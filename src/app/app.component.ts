import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewChecked {
  title = 'getwork';
  show = false;

  constructor(private cdRef: ChangeDetectorRef){

  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
