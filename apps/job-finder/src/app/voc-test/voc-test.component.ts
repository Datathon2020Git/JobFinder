import { Component, OnInit } from '@angular/core';
import { FormsService } from './forms.service';

@Component({
  selector: 'job-finder-voc-test',
  templateUrl: './voc-test.component.html',
  styleUrls: ['./voc-test.component.scss']
})
export class VocTestComponent implements OnInit {

  isLinear = false;

  constructor( public forms: FormsService) { }

  ngOnInit() {
    this.forms.initialize()
  }
}
