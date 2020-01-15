import { Component, OnInit, Input } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';


@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.css']
})
export class WodComponent implements OnInit {  
  @Input('wod') wod:Workout;

  constructor(
  ) { }

  ngOnInit() {
  }

}
