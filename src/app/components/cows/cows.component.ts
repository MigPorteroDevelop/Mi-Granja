import { Component, OnInit } from '@angular/core';
import { Cow } from '../../models/cow';
import { CowService } from '../../services/cow.service';

@Component({
  selector: 'cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.scss'],
  providers: [CowService]
})
export class CowsComponent implements OnInit {

  public cows: Cow[];
  public desactivado: boolean;
  public textCow: string;

  constructor(
    private _cowService: CowService
  ) {
    this.cows = [];
    //Para controlar el botón y lo que muestra.
    this.desactivado = false;
    //Texto reactivo.
    this.textCow = "¡Descúbrelas!";
  }

  ngOnInit(): void {
    this._cowService.getCows().subscribe(
      response => {
        this.cows = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  //Botón desactivado, al lanzar el evento se cambia el estado y así mostrar la lista.
  showCows() {
    if (!this.desactivado) {
      this.desactivado = true;
      this.textCow = "Ocultar";
    } else {
      this.desactivado = false;
      this.textCow = "¡Descúbrelas!";
    }
  };
}
