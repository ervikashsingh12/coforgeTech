import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-apply-component',
  templateUrl: './apply-component.component.html',
  styleUrls: ['./apply-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplyComponentComponent implements OnInit {

  constructor(private router: Router, private loader: AppComponent,) { }

  ngOnInit(): void {
    // console.log(this.router.url)
  }
  btnClick= function () {
    this.loader.clickLoader();
    this.router.navigateByUrl('/mortgageoptions');
};
}


