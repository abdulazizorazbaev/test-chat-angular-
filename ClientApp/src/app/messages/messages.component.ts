import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() messages: Message[] = [];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {  }
}
