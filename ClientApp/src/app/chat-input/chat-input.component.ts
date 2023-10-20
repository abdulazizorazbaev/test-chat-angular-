import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  content: string = '';
  @Output() contentEmitter = new EventEmitter();

  sendMessage() {
    if(this.content.trim() !== "") {
      this.contentEmitter.emit(this.content);
    }

    this.content = '';
  }
}
