import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {

  navItems = [
    { label: 'How to apply', route: '/apply'},
    { label: 'Mortgage Options', route: '/mortgageoptions'},
    { label: 'Confirm Mortgages', route: '/confirm'},
    { label: 'Property Details', route: '/details'},
    { label: 'Valuation', route: '/valuation'},
    { label: 'OtherOccupants/Solicitor', route: '/otherOccupants'},
    { label: 'Payment Details', route: '/paymantDetails'},
    { label: 'Review and submit', route: '/reviewSubmit'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }

}
