import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.sass']
})
export class FotoComponent implements OnInit {
  @Input() picture: string;

  constructor() { }

  ngOnInit() {
  }

}
