import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {  ChangeDetectorRef, AfterContentChecked } from '@angular/core';

import { Title } from '@angular/platform-browser';

//import { environment } from '@env/environment';
//import { LayoutService } from '@app/core/layout/layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  /*env = environment;
  title = this.env.appName;
  partials: any = {};

  public constructor(
    private titleService: Title,
    public layout: LayoutService,
    private changeDetector: ChangeDetectorRef,
  ) {}

   ngOnInit() {
    this.titleService.setTitle(this.env.appName);
    
    this.layout.getLayout().subscribe(partials => {
      this.partials = partials;
    });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }*/
}
