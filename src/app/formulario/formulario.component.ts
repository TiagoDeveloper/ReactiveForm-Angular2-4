import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato: FormGroup;
  telefones: FormArray;

  constructor( private fb: FormBuilder ) { 
    this.contato = this.fb.group({
      nome: '',
      email: '',
      telefones: this.buildArray()
    });
  }

  buildArray(): FormArray {
    this.telefones = this.fb.array([ this.buildGroup() ]);
    return this.telefones;
  }
  buildGroup(): FormGroup {
    return this.fb.group({
      telefone: ''
    });
  }

  addTelefone(): void {
    this.telefones.push(this.buildGroup());
  }

  ngOnInit() {
  }

}
