import { Component } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatAngular';
  message: string = '';
  lista: string[] = [];

  addChat() {    
    this.lista.push(this.message);
    this.message = '';
  }
}