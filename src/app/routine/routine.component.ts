import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  
  completeMessage(form:NgForm):void{

  }
  removeTask(i:any)
  {
    this.todo.splice(i,1);
  }


}
