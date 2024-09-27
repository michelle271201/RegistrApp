import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage {
  showQRCode: boolean = false;

  constructor() {}

  generateQRCode() {
    this.showQRCode = !this.showQRCode; 
  }

  ionViewWillLeave() {
    this.showQRCode = false; 
  }
}

