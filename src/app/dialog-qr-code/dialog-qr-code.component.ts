import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-qr-code',
  templateUrl: './dialog-qr-code.component.html',
  styleUrls: ['./dialog-qr-code.component.scss']
})
export class DialogQRCodeComponent implements OnInit {
  @Input() id:any;
  url:any;
  constructor() { }

  ngOnInit(): void {
    this.url=`http://192.168.10.63:4200/game/${this.id}`
    console.log(this.url)
  }

}
