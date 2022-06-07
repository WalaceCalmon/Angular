import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

  }

  formulario: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]]
  });

  onSubmit(){
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        this.formulario.reset();
      });
  }

  verificaValidTouched(campo: string) {
    return this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
