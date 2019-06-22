import {Component, OnInit} from '@angular/core';
import {EventosService} from '../../eventos.service';

@Component({
  selector: 'events-detail',
  templateUrl: './events-detail.page.html',
  styleUrls: ['./events-detail.page.scss'],
})
export class EventsDetailPage implements OnInit {
  eventos = [
    {
      titulo: 'Empreendedorismo FEMININO',
      img: '../../assets/img/events/event1.png',
      data: '30 de junho',
      local: 'Rio de Janeiro',
      link: 'https://www.sympla.com.br/empreendedorismo-feminino__502430'
    },
    {
      titulo: 'MULHERES DE SHAKESPEARE',
      img: '../../assets/img/events/event2.png',
      data: '6 a 28 de Julho',
      local: 'Rio de Janeiro',
      link: 'https://bileto.sympla.com.br/event/61038'
    },
    {
      titulo: 'ELA PODE: Rio de Janeiro',
      img: '../../assets/img/events/event3.png',
      data: '24 de junho',
      local: 'Rio de Janeiro',
      link: 'https://www.sympla.com.br/ela-pode-rio-de-janeiro-rj__530184'
    },
  ];
  events;

  constructor(
    private eventosService: EventosService
  ) {
  }

  ngOnInit() {
    this.eventosService.all().subscribe((data: any) => this.events = data.events);
  }

}
