import { Component } from '@angular/core';
import { NgModule } from "@angular/core"; // <-- NgModule
import { FormsModule } from "@angular/forms"; // <-- FormsModule

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class ComponenteComponent {
  message= '';
  
  addChat() {
    console.log(this.message);
  }
}
