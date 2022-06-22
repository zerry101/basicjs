import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ClaimModel } from '../../../models/claim.model';

@Component({
  selector: 'app-claim-notes-card',
  templateUrl: './claim-notes-card.component.html',
  styleUrls: ['./claim-notes-card.component.scss'],
})
export class ClaimNotesCardComponent implements OnInit, OnDestroy {
  @Input() claim: ClaimModel;

  size = Array;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
