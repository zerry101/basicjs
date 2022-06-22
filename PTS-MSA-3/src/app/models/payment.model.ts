export class PaymentModel {
  amount?: number;
  date?: string;

  constructor(object?: any) {
    this.amount = object.payAmount;
    this.date = object.payDate;
  }
}
