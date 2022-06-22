import { Component, OnDestroy } from '@angular/core';

import { IonRefresher } from '@ionic/angular';

import { ApiService } from '../services/api/api.service';
import { ErrorHandlerService } from '../services/error-handler/error-handler.service';
import { ToastrService } from '../services/toastr/toasts.service';

import { PaymentModel } from '../models/payment.model';

import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service'

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnDestroy {
  payments: PaymentModel[];

  size = Array;

  private alive: Subject<any> = new Subject();

  constructor(
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService,
    private toastrService: ToastrService,
    private authentication: AuthenticationService
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
    this.apiService.getMemberPayments()
      .pipe(
        takeUntil(this.alive),
        finalize(() => {
          if (event) {
            event.target.complete();
          }
        }),
      )
      .subscribe(
        async (paymentsResponse: any[]) => {
          if(paymentsResponse['_type'] == 'NotAuthorizedException'){
            this.authentication.logout();
            return;
          }
          await this.toastrService.dismiss();

          const payments: PaymentModel[] = [];

          paymentsResponse.forEach(
            (benefit: any) => {
              payments.push(new PaymentModel(benefit));
            },
          );

          this.payments = payments;
        },
        async (error: any) => {
          await this.errorHandler.handleError({
            color: 'danger',
            message: error.message,
          });
        },
    );
  }
}
