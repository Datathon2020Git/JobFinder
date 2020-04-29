import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../../forms.service';

@Component({
  selector: 'job-finder-cluster-box',
  templateUrl: './cluster-box.component.html',
  styleUrls: ['./cluster-box.component.scss']
})
export class ClusterBoxComponent implements OnInit {
  @Input() name: string;
  clicked: boolean = false;
  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
  }
  toggleCluster() {
    this.clicked = !this.clicked;
    this.formsService.toggleCluster(this.name)
  }
}
