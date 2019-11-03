
import {Project} from './project';
import {Observable, of} from 'rxjs';
import {LoggerService} from '../logger/logger.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private project: Project = null;
  private productURL: string = 'src/api/projects/projects.json';

  constructor(private http: HttpClient, private log: LoggerService) {
  }
  public getProjects(): Observable<Project> {
    if (this.project) {
      return of<Project>(this.project);
    }
    return this.http.get<Project>(this.productURL);
  }
}
