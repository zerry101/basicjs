import { Component, OnDestroy } from '@angular/core';

import { IonRefresher } from '@ionic/angular';

import { ApiService } from '../services/api/api.service';
import { ErrorHandlerService } from '../services/error-handler/error-handler.service';
import { ToastrService } from '../services/toastr/toasts.service';

import { ClaimModel } from '../models/claim.model';

import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnDestroy {
  claims: ClaimModel[];

  size = Array;

  private alive: Subject<any> = new Subject();

  constructor(
    private errorHandler: ErrorHandlerService,
    private toastrService: ToastrService,
    private apiService: ApiService,
  ) {

  }

  async ionViewWillEnter() {
    this.getData();
  }

  async ionViewWillLeave() {
    await this.toastrService.dismiss();
  }

  ngOnDestroy() {
    this.alive.next();
    this.alive.complete();
  }

  getData(event?: { target: IonRefresher }) {
    this.apiService.getMemberClaims()
      .pipe(
        takeUntil(this.alive),
        finalize(() => {
          if (event) {
            event.target.complete();
          }
        }),
      )
      .subscribe(
        async (claimsResponse: any[]) => {
          await this.toastrService.dismiss();

          const claims: ClaimModel[] = [];

          claimsResponse.forEach(
            (claim: any) => {
              claims.push(new ClaimModel(claim));
            },
          );

          this.claims = claims;
        },
        async (error: any) => {
          await this.errorHandler.handleError({ message: error.message });
        },
    );
  }
}
