import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  handleClick() {
    //execute action
}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
