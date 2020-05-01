import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'job-finder-occ-rating-form',
  templateUrl: './occ-rating-form.component.html',
  styleUrls: ['./occ-rating-form.component.scss']
})
export class OccRatingFormComponent implements OnInit {
  @Input() ratingsForm: FormArray;

  constructor(public formsService: FormsService) { }

  ngOnInit() {
  }
  submitForm() {
    console.log('Form Submitted');
  }
}
