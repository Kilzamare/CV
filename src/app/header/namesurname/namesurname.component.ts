import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-namesurname',
  templateUrl: './namesurname.component.html',
  styleUrls: ['./namesurname.component.sass']
})
export class NamesurnameComponent implements OnInit {
  @Input() name: string;
  @Input() surname: string;

  constructor() { }

  ngOnInit() {
  }

}
