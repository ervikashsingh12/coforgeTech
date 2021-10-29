import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerData=[Response]
  header:[];

  constructor(private navService: NavigationService, private router: Router, private loader: AppComponent) { }

  ngOnInit(): void {
    // this.getData = this.navService.getHeaderData();
    console.log("headerData in service",this.headerData)
  }

  // toggleSideNav() {
  //   this.navService.setShowNav(true);
  // }
  getHeader(){
    this.header = this.navService.getHeaderData();
    console.log("HeaderData",this.header )
  }
 
  logOutbtn=function () {
    this.loader.clickLoader();
    this.router.navigateByUrl('');
    this.loader.showNavData();
    
  }

}
