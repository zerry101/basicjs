import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { MemberModel } from '../../../models/member.model';

@Component({
  selector: 'app-dependents-card',
  templateUrl: './dependents-card.component.html',
  styleUrls: ['./dependents-card.component.scss'],
})
export class DependentsCardComponent implements OnInit, OnDestroy {
  @Input() member: MemberModel;
  @Input() loading: boolean;

  size = Array;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
