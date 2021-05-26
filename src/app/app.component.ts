import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoLab';
  todo:Todo[] = [
    {
      task:"fold clothes",
      completed:false,
    },
    {
      task:"put clothes in dresser",
      completed: false,
    },
    {
      task:"relax",
      completed: true,
    }
  ];
  addTask(form:NgForm):void{
    let newTask:Todo = {
      task:form.form.value.task,
      completed:false
    };
    this.todo.push(newTask);
  }
  completeTask(form:NgForm):void{
    this.todo[form.form.value.completed].completed = true;
  }

}
