import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormsService } from '../forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'job-finder-occ-rating-form',
  templateUrl: './occ-rating-form.component.html',
  styleUrls: ['./occ-rating-form.component.scss']
})
export class OccRatingFormComponent implements OnInit {
  @Input() ratingsForm: FormArray;

  constructor(public formsService: FormsService, private router: Router) { }

  ngOnInit() {
  }
  submitForm() {
    console.log('Form Submitted');
    this.router.navigate(['/results'])
  }
}
