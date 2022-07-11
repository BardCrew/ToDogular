import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TASK } from '../Task.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnDestroy {
  apiUrl: string = 'http://localhost:4300/tasks'
  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
  }
  
  getTasks(): Observable<TASK[]> {
    return this.http.get<TASK[]>(this.apiUrl);
  }

  deleteTask(task: TASK): Observable<TASK> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TASK>(url); 
  }

  addTask(task: TASK): Observable<TASK> {
    return this.http.post<TASK>(this.apiUrl, task, httpOptions);
  }

}
