import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';
import { TASK } from 'src/app/Task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: TASK[]  = []
  sub?: Subscription;
  sub2?: Subscription

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.sub = this.taskService.getTasks().subscribe((res)=>{
      this.tasks = res.reverse();
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }

  deleteTask(task: TASK) {
    if(confirm("Are you sure u want to delete this task?")) {
      this.sub2 = this.taskService.deleteTask(task).subscribe()
      this.tasks = this.tasks.filter(item => item.id !== task.id);
    };
      
  }
}
