import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  @Input() tentatives: boolean[];

  constructor() { }

  ngOnInit(): void {}

}
