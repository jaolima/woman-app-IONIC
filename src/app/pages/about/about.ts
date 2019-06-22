import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as conversationalForm from 'conversational-form';

@Component({
  selector: 'page-about',
  template: `
    <div class="myCF" #myCF></div>`,
  styles: [`.myCF {
    height: 600px;
    width: 300px;
  }`],
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit {

  @ViewChild('myCF') myCF: ElementRef;
  cf: any;
  formFields;
  statusOptions = [
    {
      tag: 'option',
      'cf-label': 'Estou bem!',
      value: 'good'
    },
    {
      tag: 'option',
      'cf-label': 'Mal',
      value: 'bad'
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.getOptions();
  }

  submitCallback() {
    const formDataSerialized = this.cf.getFormData(true);
    console.log(formDataSerialized);
    if (formDataSerialized.feeling[0] === 'bad') {
      this.cf.addRobotChatResponse('sinto muito, por você estar passando por isso, aqui temos um <a href="/app/tabs/map">link<a>' +
        ' com atendimentos psicológicos especializados gratuitos');
    } else if (formDataSerialized.feeling[0] === 'good') {
      this.cf.addRobotChatResponse('Que bom que está bem, gostaria de ver nossos <a href="/events-detail">eventos</a>!');
    }
  }

  getOptions() {
    this.formFields = [
      {
        tag: 'select',
        name: 'feeling',
        'cf-questions': 'Olá, seja bem vinda! Sou o chat da Go Women e estou aqui para te ajudar' +
          ' a identificar alguns tipos de abuso, para que vc tenha a melhor solução em mãos.' +
          '\n Como você está se sentindo?',
        'cf-input-placeholder': 'Selecione como esta se sentindo!',
        isMultiChoice: false,
        children: this.statusOptions,
      }
    ];
    this.cf = conversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback.bind(this),
      },
      tags: this.formFields
    });
    this.myCF.nativeElement.appendChild(this.cf.el);
  }
}
