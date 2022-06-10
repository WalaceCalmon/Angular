import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  public lancamentoBusca: FormGroup = this.formBuilder.group({
    descricao: [
      null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]
    ],
    dataRange: [null, Validators.required,]
  })

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
    ) { }


  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  public submitForm(){
    console.log(this.lancamentoBusca.value)
  }

}
