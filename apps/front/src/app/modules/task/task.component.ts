import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { ITask } from '@nt-al/api-interfaces';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] | undefined;
  constructor(public service: TaskService) {}

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas(): void {
    this.service.getAll().then(tasks => {
      this.tasks = tasks;
      console.log(this.tasks)
    });
  }
}
