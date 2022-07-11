import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { TASK } from 'src/app/Task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() addNewTask = new EventEmitter<TASK>();
  formData: FormGroup = new FormGroup({});
  showERR: boolean = false;
  newTask?: TASK;
  now?: Date
  
  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      'task-name': new FormControl(null, [Validators.required]),
      'task-desc': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if (this.formData.valid) {
      this.now = new Date()
      this.formData.value['date'] = this.now
      this.newTask = this.formData.value
      this.onAddTask();
      this.formData.reset()
      this.showERR = false
    } else {
      this.showERR = true
    }
  }

  onAddTask() {
    return this.addNewTask.emit(this.newTask);
  }
}
