import { Component, OnInit } from '@angular/core';
import { FormsService } from './forms.service';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'job-finder-voc-test',
  templateUrl: './voc-test.component.html',
  styleUrls: ['./voc-test.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class VocTestComponent implements OnInit {

  isLinear = true;

  constructor( public forms: FormsService) { }

  ngOnInit() {
    this.forms.initialize()
  }
}
