import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'job-finder-rating-box',
  templateUrl: './rating-box.component.html',
  styleUrls: ['./rating-box.component.scss']
})
export class RatingBoxComponent implements OnInit {
  @Input() description: string;
  @Input() control: FormControl;
  max = 5;
  min = 1;
  step = 1;
  thumbLabel = true;
  tickInterval = 1
  constructor() { }

  ngOnInit(): void {
  }

}
