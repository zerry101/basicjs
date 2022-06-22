import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ClaimModel } from '../../../models/claim.model';

@Component({
  selector: 'app-claim-card',
  templateUrl: './claim-card.component.html',
  styleUrls: ['./claim-card.component.scss'],
})
export class ClaimCardComponent implements OnInit, OnDestroy {
  @Input() claim: ClaimModel;

  size = Array;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
