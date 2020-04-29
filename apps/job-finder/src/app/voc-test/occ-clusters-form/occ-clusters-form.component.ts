import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'job-finder-occ-clusters-form',
  templateUrl: './occ-clusters-form.component.html',
  styleUrls: ['./occ-clusters-form.component.scss']
})
export class OccClustersFormComponent implements OnInit {
  @Input() clusterForm: FormArray;
  clusterNames: string[] = [
    ' Construction Work',
    'Material Technicial',
    'Natural Engineers',
    'Healthcare',
    'Logicstics',
    'Food Technology',
    'Apparel Enterprises',
    'Social Services',
    'Arts',
    'Education'
  ]
  constructor() { }

  ngOnInit() {

  }

}
