import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
