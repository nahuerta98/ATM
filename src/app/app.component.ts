import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATM';
  opcionUno = 'Consulta de Saldo';
  opcionDos = 'Retiro de Efectivo';
  opcion = 'Deposito Cajero'
  show: boolean = false;
  show2:boolean = false;
  show3:boolean = false;
  alert:boolean = false;
  alert2:boolean = false;
  checkOut:boolean = false;
  checkOut2:boolean = false;

  totalCajero: number;
  retiro: number = 0;
  nuevoSaldo: number;

  billeteCien: number = 0;
  billeteDoscientos:number = 0;
  billeteQuinientos:number = 0;

  retiroAux: number;
  retiroAux2: number;
  retiroAux3:number;
  
 

  //Métodos
  totalDinero(){
    this.totalCajero = (this.billeteCien*100) + (this.billeteDoscientos*200) + (this.billeteQuinientos*500);
  }

  retiroCajero(){
    if( this.retiro < 100){
      this.alert = true;
    }
    if(this.retiro > this.totalCajero ){
      this.alert2 = true;
    }
    else{
      this.nuevoSaldo = this.totalCajero - this.retiro;
      this.alert = false;
      this.checkOut = true;
    }
  }

  totalBilletes(){
    this.retiroAux = Math.floor(this.retiro / 500);
    this.retiroAux2 = Math.floor(this.retiro % 500 / 200);
    this.retiroAux3 = Math.floor(this.retiroAux2 % 200);
  }


  


























}


