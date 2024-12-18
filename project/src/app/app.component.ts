import { Component } from '@angular/core';
import { Task } from './interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  template: `
  <form>
    <h2>Lista zadań</h2>
    <input type="text" [(ngModel)]="taskInput" name="task" placeholder="Dodaj nowe zadanie" id="taskInput">
    <input type="button" value="Dodaj zadanie" id="addTask" (click)="addTask()">
    <div class="tasksList">
      <ul>
        <li *ngFor="let task of tasks; let i = index" [ngClass]="{'completed': task.completed}">
          <input type="checkbox" name="ifChecked" id="ifChecked" [checked]="task.completed" (change)="toggleTask(i)">
          <span>{{ task.title }}</span>
          <input type="button" value="Usuń" (click)="removeTask(i)" id="removeTask">
        </li>
      </ul>
    </div>
  </form>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskInput: string = ''
  title = 'project';
  tasks: Task[] = [
    {title: "Task 1", completed: false},
    {title: "Task 2", completed: true},
  ]
  addTask() {
    if(this.taskInput.trim()){
      this.tasks.push({title: this.taskInput, completed: false});
      this.taskInput = '';
    }
  }
  removeTask(index: number){
    this.tasks.splice(index, 1)
  }
  toggleTask(index: number){
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
