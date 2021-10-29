import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mortgage-options',
  templateUrl: './mortgage-options.component.html',
  styleUrls: ['./mortgage-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MortgageOptionsComponent implements OnInit {
  elements: any = [
    {discription: 1, initialrate: '10%', repayment: 'Otto', productfee: 4000, options:'mortgage'},
    {discription: 2, initialrate: '20%', repayment: 'Thornton', productfee: 3000, options:'mortgage'},
    {discription: 3, initialrate: '30%', repayment: 'the Bird', productfee: 20000, options:'mortgage'},
    {discription: 4, initialrate: '40%', repayment: 'auto', productfee: 10000, options:'mortgage'},
  ];

  headElements = ['Discription', 'Initial Rate', 'Monthly Repayment', 'Product Fee', 'Select a Mortgage Product'];

  constructor() { }

  ngOnInit(): void {
  }

}
