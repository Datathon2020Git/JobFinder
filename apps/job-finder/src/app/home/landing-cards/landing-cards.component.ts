import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'job-finder-landing-cards',
  templateUrl: './landing-cards.component.html',
  styleUrls: ['./landing-cards.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LadingCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
