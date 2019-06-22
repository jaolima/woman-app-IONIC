import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../eventos.service';
import {MulheresService} from '../../mulheres.service';

@Component({
  selector: 'inclusao',
  templateUrl: './inclusao.page.html',
  styleUrls: ['./inclusao.page.scss'],
})
export class InclusaoPage implements OnInit {
  events;
  mulheres;

  constructor(
    private eventosService: EventosService,
    private mulheresService: MulheresService
  ) { }

  ngOnInit() {
    this.eventosService.all().subscribe((data: any) => this.events = data);
    this.mulheresService.all().subscribe((data: any) => this.mulheres = data);
  console.log(this.mulheres);
  }
}
