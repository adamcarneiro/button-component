import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type!:string;
  @Input() class!:string;
  @Input() content!:string;
  @Input() legend!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
