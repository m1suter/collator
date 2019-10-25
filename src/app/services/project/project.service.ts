import { Injectable } from '@angular/core';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private project: Project = null;

  constructor() { }
}
