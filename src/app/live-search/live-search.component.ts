import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.scss']
})
export class LiveSearchComponent implements OnInit {
  title = 'Search products';
  search;
  searchA ;
  products = [
    {ID: 1, name: 'Iphone XS', manufacturer: 'Apple', price: 2500},
    {ID: 2, name: 'Samsung S 10', manufacturer: 'Samsung', price: 3500},
    {ID: 3, name: 'Samsung M 20', manufacturer: 'Samsung', price: 2500},
    {ID: 4, name: 'Iphone 7', manufacturer: 'Apple', price: 5500},
    {ID: 5, name: 'Iphone 8', manufacturer: 'Apple', price: 6500},
    {ID: 6, name: 'Iphone 9', manufacturer: 'Apple', price: 7500}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
