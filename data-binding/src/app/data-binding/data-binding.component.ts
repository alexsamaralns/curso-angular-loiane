import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string  = 'http://loiane.training';
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual:string = '';
  valorSalvo:string = '';
  isMouserOver:boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clickButton() {
    alert('Button clicked!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>event.target).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouserOver = !this.isMouserOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
