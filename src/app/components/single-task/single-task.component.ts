import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TASK } from 'src/app/Task.model';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {
  @Input() task?: TASK
  @Output() taskDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.taskDelete.emit()
  }

}
