import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { TASK } from './Task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formData: FormGroup = new FormGroup({});
  showERR: boolean = false;
  now?: Date
  title = 'AngularToDo';

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      'task-name': new FormControl(null, [Validators.required]),
      'task-desc': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if(this.formData.valid) {
      this.now = new Date()
      this.formData.value['date'] = this.now
      this.taskService.addTask(this.formData.value) 
      this.formData.reset()
      this.showERR = false
    } else {
      this.showERR = true
    }
  }
}
