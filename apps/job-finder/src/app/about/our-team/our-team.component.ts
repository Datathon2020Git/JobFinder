import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-finder-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  imageUrls = ["george.jpg", "sporis.jpg", "yiono.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
