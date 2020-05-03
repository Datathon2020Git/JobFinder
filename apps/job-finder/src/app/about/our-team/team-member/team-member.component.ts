import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job-finder-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() imgUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
