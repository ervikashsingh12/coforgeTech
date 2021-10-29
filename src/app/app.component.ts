import { Component, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  showData=false;
  title = 'simple-side-nav';
  constructor(private spinner: NgxSpinnerService){}

  ngOnInit() {
    this.clickLoader();
  }

  clickLoader(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

  }
  showNavData(){
    this.showData=!this.showData;
  }
}

 


